import {
	Button,
	Text,
	Image,
	View,
	Pressable,
	ListRenderItem,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useMeQuery } from '../generated/graphql'
import tw from 'twrnc'
import Spinner from '../ui/Spinner'
import useAuth from '../utils/useAuth'
import { FlatList } from 'react-native-gesture-handler'
import { setting } from '../types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { ProfileStackParams } from '../navigation/Stack'

const Profile: React.FC = ({}) => {
	const navigation =
		useNavigation<NativeStackNavigationProp<ProfileStackParams>>()
	const { signOut } = useAuth()
	const {
		loading,
		error,
		data: meData,
	} = useMeQuery({ fetchPolicy: 'no-cache' })

	const data = [
		{
			icon: 'close-circle-outline',
			color: '',
			text: 'Disconnect',
			onPress: () => signOutHandler(),
		},
		{
			icon: 'notifications-outline',
			color: '',
			text: 'Notifications',
			onPress: () => navigation.navigate('Notifications'),
		},
	]

	const signOutHandler = () => {
		signOut()
	}

	const renderItem: ListRenderItem<setting> = ({ item }) => {
		return (
			<Pressable
				style={tw`flex flex-row w-11/12 self-center justify-center items-center rounded my-2 py-2 border border-black ${item.color}`}
				onPress={item.onPress}
			>
				<Ionicons name={item.icon as any} color={'black'} size={30} />
				<Text style={tw`text-center text-2xl ml-2`}>{item.text}</Text>
			</Pressable>
		)
	}

	if (loading) return <Spinner />
	if (error)
		return (
			<View style={tw`bg-red-400`}>
				<Text>{error.message}</Text>
				<Button title="Logout" onPress={signOutHandler} />
			</View>
		)

	return (
		<View style={tw`flex-1`}>
			<FlatList
				data={data}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				keyExtractor={item => item.text}
				ListHeaderComponent={
					<>
						<Image
							source={require('../../assets/IMG_3624.png')}
							style={tw`mt-10 h-40 w-40 rounded-full self-center`}
						/>

						<View style={tw`self-center my-2`}>
							<Text style={tw`text-center font-bold text-2xl`}>
								{meData?.me?.name}
							</Text>
							<Text style={tw`text-center text-base`}>{meData?.me?.email}</Text>
						</View>

						<View style={tw`self-center mt-2 flex flex-row mb-5`}>
							<View style={tw`flex-1`}>
								<Text style={tw`text-center text-base`}>0</Text>
								<Text style={tw`text-center `}>Games</Text>
							</View>

							<View style={tw`flex-1`}>
								<Text style={tw`text-center text-base`}>
									{meData?.me?.points}
								</Text>
								<Text style={tw`text-center `}>Points</Text>
							</View>

							<View style={tw`flex-1`}>
								<Text style={tw`text-center text-base`}>0</Text>
								<Text style={tw`text-center `}>Likes</Text>
							</View>
						</View>
					</>
				}
			/>
		</View>
	)
}

export default Profile
