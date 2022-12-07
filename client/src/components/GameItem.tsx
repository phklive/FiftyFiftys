import React from 'react'
import tw from 'twrnc'
import { Text, Pressable, Image, View } from 'react-native'
import { Game, User } from '../generated/graphql'

interface GameItemProps {
	game: Game
	me: User
	navigation: any
}

const GameItem: React.FC<GameItemProps> = ({ game, navigation, me }) => {
	return (
		<Pressable
			style={tw`w-11/12 h-60 bg-white shadow-lg my-2 p-2 self-center rounded`}
			onPress={() => navigation.navigate('Game', { id: game.id })}
		>
			<Text style={tw`text-center text-2xl`}>{game.product.title}</Text>
			<View style={tw`flex-1 flex-row`}>
				<Image
					source={{ uri: game.product.image }}
					style={tw`h-full w-1/2 rounded`}
					resizeMode="cover"
				/>
				<View style={tw`flex-1 pl-2`}>
					<Text style={tw``}>{game.slots}</Text>
					{game.winner ? (
						<Text style={tw``}>
							{game.winner === me?.id ? 'you have won' : 'you have lost'}
						</Text>
					) : (
						<Text>No winner yet</Text>
					)}
					<Text style={tw``}>{game.started.toString()}</Text>
					<Text>Num of players:{game.players.length}</Text>
				</View>
			</View>
		</Pressable>
	)
}

export default GameItem
