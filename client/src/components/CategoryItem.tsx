import React from 'react'
import { Text, Pressable, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeStackParams } from '../navigation/Stack'

interface CategoryProps {
	title: string
	image: string
	tag: string
}

const Category: React.FC<CategoryProps> = ({ title, image, tag }) => {
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()
	return (
		<Pressable
			style={tw`items-center mx-2`}
			onPress={() => navigation.navigate('Products', { search: tag })}
		>
			<Image
				source={{
					uri: image,
				}}
				style={tw`h-18 w-18 rounded-full mb-2`}
			/>
			<Text style={tw``}>{title}</Text>
		</Pressable>
	)
}

export default Category
