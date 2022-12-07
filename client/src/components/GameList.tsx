import React from 'react'
import { Text, FlatList, ListRenderItem } from 'react-native'
import { Game, User } from '../generated/graphql'
import GameItem from './GameItem'

interface GameListProps {
	data: Game[]
	navigation: any
	me: User
}

const GameList: React.FC<GameListProps> = ({ data, navigation, me }) => {
	const renderItem: ListRenderItem<Game> = ({ item }) => {
		return <GameItem game={item} navigation={navigation} me={me} />
	}
	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			showsVerticalScrollIndicator={false}
		/>
	)
}

export default GameList
