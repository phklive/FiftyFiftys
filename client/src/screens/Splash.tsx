import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { AuthParams } from '../navigation/Stack'
import tw from 'twrnc'
import Spacer from '../ui/Spacer'

interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {
	const navigation = useNavigation<NativeStackNavigationProp<AuthParams>>()

	return (
		<View style={tw`flex-1 flex-col`}>
			<Spacer />
			<Image
				source={{
					uri: 'https://cdn.pixabay.com/photo/2015/10/01/19/05/car-967470_1280.png',
				}}
				style={tw`h-52 w-98 mb-10`}
			/>
			<Text style={tw`text-center text-4xl font-bold mb-10`}>
				Win the prizes of your dreams here with FiftyFiftys!
			</Text>
			<Text style={tw`text-center text-xl mb-10`}>
				Explore the most valuable prizes in the world, play and win them here
				with FiftyFiftys! Have fun!
			</Text>
			<View
				style={tw`flex flex-row rounded border border-white self-center w-10/12 bg-white p-2`}
			>
				<Pressable
					style={[
						tw`flex-1 rounded py-2 mx-1`,
						{ backgroundColor: 'rgba(240, 238, 243, 255)' },
					]}
					onPress={() => navigation.navigate('SignUp')}
				>
					<Text style={[tw`text-center font-bold text-lg`]}>Register</Text>
				</Pressable>
				<Pressable
					style={[
						tw`flex-1 rounded py-2 mx-1`,
						{ backgroundColor: 'rgba(240, 238, 243, 255)' },
					]}
					onPress={() => navigation.navigate('SignIn')}
				>
					<Text style={tw`text-center font-bold text-lg`}>Sign in</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default Splash
