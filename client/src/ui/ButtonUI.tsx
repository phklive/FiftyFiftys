import React from 'react'
import tw from 'twrnc'
import { Pressable, Text } from 'react-native'

interface ButtonUIProps {
	text: string
	onPress: () => void
}

const ButtonUI: React.FC<ButtonUIProps> = ({ text, onPress }) => {
	return (
		<Pressable
			onPress={onPress}
			style={[
				tw`self-center w-10/12 rounded py-4 my-4`,
				{ backgroundColor: '#e77467' },
			]}
		>
			<Text style={tw`text-center text-white font-bold`}>{text}</Text>
		</Pressable>
	)
}

export default ButtonUI
