import React from 'react'
import { FlatList, ListRenderItem, Text, View } from 'react-native'
import tw from 'twrnc'
import { storeItem } from '../types'
import StoreItem from './StoreItem'

interface StoreListProps {
	onPress: (amount: number) => void
	loading: boolean
}

const data: storeItem[] = [
	{
		title: 'Small bag',
		price: '9.99€',
		content: '10 000',
		amount: 999,
		image: 'https://cdn-icons-png.flaticon.com/512/845/845665.png',
	},
	{
		title: 'Medium bag',
		price: '24.99€',
		content: '50 000',
		amount: 2499,
		image:
			'https://cdn-icons.flaticon.com/png/512/536/premium/536054.png?token=exp=1649264054~hmac=b6b731a11820e795d2005efdceb9479f',
	},
	{
		title: 'Big bag',
		price: '49.99€',
		content: '200 000',
		amount: 4999,
		image:
			'https://cdn-icons.flaticon.com/png/512/536/premium/536054.png?token=exp=1649264054~hmac=b6b731a11820e795d2005efdceb9479f',
	},
	{
		title: 'OMG bag',
		price: '99.99€',
		content: '500 000',
		amount: 9999,
		image:
			'https://cdn-icons.flaticon.com/png/512/2108/premium/2108625.png?token=exp=1649264054~hmac=837f7d8a5981f92726e56bdf93e75959',
	},
]

const StoreList: React.FC<StoreListProps> = ({ onPress, loading }) => {
	const renderItem: ListRenderItem<storeItem> = ({ item }) => {
		return (
			<StoreItem
				amount={item.amount}
				price={item.price}
				image={item.image}
				title={item.title}
				content={item.content}
				onPress={onPress}
				loading={loading}
			/>
		)
	}

	return (
		<View style={tw`flex-1`}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.amount.toString()}
				showsVerticalScrollIndicator={false}
				numColumns={2}
			/>
		</View>
	)
}

export default StoreList
