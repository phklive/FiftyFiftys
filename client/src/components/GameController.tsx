import React, { useState } from 'react'
import tw from 'twrnc'
import { Pressable, Text, View } from 'react-native'
import { gameMode } from '../types'

const data: gameMode[] = [
	{
		id: 2,
		title: '1vs1',
		numPlayers: 2,
	},
	{
		id: 5,
		title: '5 players',
		numPlayers: 5,
	},
	{
		id: 10,
		title: '10 players',
		numPlayers: 10,
	},
	{
		id: 100,
		title: '100 players',
		numPlayers: 100,
	},
]

interface GameControllerProps {
	handler: (id: number) => void
	selectedItem: number
}

const GameController: React.FC<GameControllerProps> = ({
	handler,
	selectedItem,
}) => {
	return (
		<View style={tw`flex flex-row flex-wrap`}>
			{data.map(gameMode => {
				return (
					<Pressable
						style={[
							tw`items-center p-2 bg-black my-2 mx-auto w-2/5 rounded
						`,
							selectedItem === gameMode.id
								? {
										shadowColor: 'red',
										shadowOffset: { width: 0, height: 0 },
										shadowOpacity: 1,
										shadowRadius: 5,
								  }
								: {},
						]}
						key={gameMode.id}
						onPress={() => handler(gameMode.id)}
					>
						<Text style={tw`text-center text-xl text-white font-bold`}>
							{gameMode.title}
						</Text>
					</Pressable>
				)
			})}
		</View>
	)
}

export default GameController
