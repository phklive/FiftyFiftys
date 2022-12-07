import React from 'react'
import tw from 'twrnc'
import { ListRenderItem, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Notification from '../components/Notification'
import {
	Notification as NotificationType,
	useMeQuery,
} from '../generated/graphql'
import Spinner from '../ui/Spinner'

const Notifications: React.FC = () => {
	const { loading, error, data } = useMeQuery()

	const renderItem: ListRenderItem<NotificationType> = ({ item }) => {
		return (
			<Notification
				id={item.id}
				title={item.title}
				text={item.text}
				image={item?.product?.image}
			/>
		)
	}

	if (loading) return <Spinner />
	if (error) return <Text>There has been an error: {error.message}</Text>
	return (
		<>
			<Text style={tw`text-center text-2xl`}>News</Text>
			<View style={tw`flex-1`}>
				{/* <FlatList
					data={data?.me?.notifications as any}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
				/> */}
			</View>
		</>
	)
}

export default Notifications
