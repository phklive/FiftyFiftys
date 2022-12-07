import React from 'react'
import tw from 'twrnc'
import { Pressable, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeStackParams } from '../navigation/Stack'
import { Zocial } from '@expo/vector-icons'
import { useMeQuery } from '../generated/graphql'
import Spinner from './Spinner'

const HeaderFF: React.FC = () => {
	const { loading, error, data, refetch } = useMeQuery()
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()

	if (loading) return <Spinner />
	if (error) return <Text>There has been an error: {error.message}</Text>
	return (
		<>
			<View
				style={[tw`h-1/24`, { backgroundColor: 'rgba(239, 235, 241, 255)' }]}
			/>
			<View
				style={[
					tw`flex-row items-center justify-between p-2`,
					{ backgroundColor: 'rgba(239, 235, 241, 255)' },
				]}
			>
				<Text style={[tw`text-2xl font-bold flex-1`]}>FiftyFiftys</Text>
				<Pressable
					style={tw`flex-row items-center bg-gray-400 rounded-full p-1`}
					onPress={() => navigation.navigate('Store', {refetch})}
				>
					<Ionicons
						name="add-circle-outline"
						size={28}
						color="black"
						style={tw``}
					/>
					<Text style={tw`text-xl mx-2`}>{data?.me?.points}</Text>
					<Zocial name="bitcoin" color={'#f2a900'} size={22} />
				</Pressable>
			</View>
		</>
	)
}

export default HeaderFF
