import React from 'react'
import tw from 'twrnc'
import { ImageBackground, View, Text } from 'react-native'
import { Zocial, AntDesign, Entypo } from '@expo/vector-icons'

interface FlashCardProps {
	image: string
	title: string
	price: number
}

const FlashCard: React.FC<FlashCardProps> = ({ image, title, price }) => {
	return (
		<ImageBackground
			source={{
				uri: image,
			}}
			style={tw`h-full w-full rounded-xl flex flex-col overflow-hidden`}
		>
			<View style={tw`mt-auto mb-2 ml-2`}>
				<Text style={tw`text-white font-bold text-3xl`}>{title}</Text>
				<View style={tw`flex flex-row items-center`}>
					<Text style={tw`text-white text-2xl mr-2`}>{price}</Text>
					<Zocial name="bitcoin" color={'#f2a900'} size={30} />
				</View>
			</View>

			{/* <View
				style={tw`flex flex-row justify-between items-center justify-center mb-2`}
			>
				<View
					style={tw`rounded-full border-2 border-red-500 items-center justify-center p-2 mr-2`}
				>
					<Entypo name="cross" size={40} color={'red'} />
				</View>
				<View
					style={tw`rounded-full border-2 border-green-600 items-center justify-center p-2 ml-2`}
				>
					<Entypo name="heart" size={40} color={'green'} />
				</View>
			</View> */}
		</ImageBackground>
	)
}

export default FlashCard
