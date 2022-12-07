import React from 'react'
import { Image, Pressable, Text } from 'react-native'
import tw from 'twrnc'
import { storeItem } from '../types'

const StoreItem: React.FC<storeItem> = ({
	amount,
	image,
	price,
	title,
	content,
	onPress,
	loading
}) => {
	return (
		<Pressable
			style={tw`w-11/12 flex-1 bg-blue-100 shadow rounded m-2`}
			onPress={() => (onPress ? onPress(amount) : {})}
			disabled={loading}
		>
			<Text style={tw`text-center text-2xl font-bold`}>{title}</Text>
			<Text style={tw`text-center text-xl font-bold text-yellow-500`}>
				{content}
			</Text>
			<Image
				source={{ uri: image }}
				style={tw`w-11/12 h-40 mx-auto my-2`}
				resizeMode="contain"
			/>
			<Text style={tw`text-center text-xl mb-2`}>{price}</Text>
		</Pressable>
	)
}

export default StoreItem
