import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'
import tw from 'twrnc'

interface CarouselItemProps {
	image: string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image }) => {
	const { width } = useWindowDimensions()
	return (
		<View style={tw`items-center mx-2`}>
			<Image
				source={{
					uri: 'https://images.pexels.com/photos/3510/hand-apple-iphone-smartphone.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
				}}
				style={tw`h-70 w-70 rounded-full mb-4`}
			/>
			<Text style={tw`text-base`}>SmartPhone</Text>
		</View>
	)
}

export default CarouselItem

// 	{
// 	height: 70,
// 	width: 70,
// 	borderRadius: 100,
// 	marginBottom: 4,
// }
