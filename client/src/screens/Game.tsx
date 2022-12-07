import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { useGameQuery } from '../generated/graphql'
import { GameStackParams } from '../navigation/Stack'
import Spinner from '../ui/Spinner'

type GameProps = NativeStackScreenProps<GameStackParams, 'Game'>

const Game: React.FC<GameProps> = ({ route }) => {
	const { loading, error, data } = useGameQuery({
		variables: { gameId: route.params.id },
	})

	if (loading) return <Spinner />
	if (error) return <Text>There has been an error {error.message}</Text>
	return (
		<View>
			<Text>Game page</Text>
			<Text>Game id: {route.params.id}</Text>
			{data?.game?.players.map(e => (
				<Text key={e.id}>{e.name}</Text>
			))}
		</View>
	)
}

export default Game
