import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from 'twrnc'
import { notification } from '../types'

const Notification: React.FC<notification> = ({ text, title, image }) => {
	return (
		<View
			style={tw`flex flex-row items-center mt-2 p-2 shadow-lg bg-white mx-2 rounded`}
		>
			<Image
				source={{ uri: image }}
				style={tw`h-20 w-20 rounded-full`}
				resizeMode={'cover'}
			/>
			<View style={tw`ml-4`}>
				<Text style={tw`text-2xl`}>{title}</Text>
				<Text style={tw`text-base text-gray-400`}>{text}</Text>
			</View>
		</View>
	)
}

export default Notification
