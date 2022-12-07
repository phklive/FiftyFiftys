import React from 'react'
import tw from 'twrnc'
import { View, Image, Text } from 'react-native'

const POTX: React.FC = () => {
	return (
		<View style={tw`mt-2`}>
			<Image
				source={{
					uri: 'https://media0.giphy.com/media/l0Ex6kAKAoFRsFh6M/giphy.gif?cid=ecf05e474zk6ulvzv9i3uwf0flhowy96jiyobrddlqr6rpck&rid=giphy.gif&ct=g',
				}}
				style={tw`h-55 w-11/12 self-center rounded`}
			/>
		</View>
	)
}

export default POTX
