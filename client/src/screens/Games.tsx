import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import GameList from '../components/GameList'
import { Game, useMeQuery, User, useUserGamesQuery } from '../generated/graphql'
import { GameStackParams } from '../navigation/Stack'
import Spinner from '../ui/Spinner'

interface GamesProps {}

const Games: React.FC<GamesProps> = ({}) => {
	const { loading, error, data } = useUserGamesQuery({
		fetchPolicy: 'network-only',
	})

	const {
		loading: meLoading,
		error: meError,
		data: meData,
	} = useMeQuery({ fetchPolicy: 'network-only' })

	const navigation = useNavigation<NativeStackNavigationProp<GameStackParams>>()
	if (loading) return <Spinner />
	if (meLoading) return <Spinner />
	if (error) return <Text>There has been an error {error.message}</Text>
	if (meError) return <Text>There has been an error {meError.message}</Text>
	return (
		<View style={tw`flex-1`}>
			<Text style={tw`text-center text-3xl my-2`}>My games</Text>
			{data?.userGames?.length! > 0 ? (
				<GameList
					data={data?.userGames as Game[]}
					navigation={navigation}
					me={meData?.me as User}
				/>
			) : (
				<Text style={tw`text-2xl text-center`}>You have no active games</Text>
			)}
		</View>
	)
}

export default Games
