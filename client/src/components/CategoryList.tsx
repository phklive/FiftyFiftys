import React from 'react'
import { View, FlatList, ListRenderItem } from 'react-native'
import { category } from '../types'
import CategoryItem from './CategoryItem'
import tw from 'twrnc'

const data: category[] = [
	{
		id: 1,
		title: 'SmartPhones',
		image:
			'https://images.pexels.com/photos/3510/hand-apple-iphone-smartphone.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		tag: 'smartphone',
	},

	{
		id: 2,
		title: 'Cars',
		image:
			'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		tag: 'car',
	},

	{
		id: 3,
		title: 'Computers',
		image:
			'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		tag: 'computer',
	},
	{
		id: 4,
		title: 'Clothes',
		image:
			'https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		tag: 'clothe',
	},

	{
		id: 5,
		title: 'Games',
		image:
			'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		tag: 'game',
	},
]

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = ({}) => {
	const renderItem: ListRenderItem<category> = ({ item }) => {
		return <CategoryItem title={item.title} image={item.image} tag={item.tag} />
	}

	return (
		<View style={tw`my-4 p-2`}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.id.toString()}
				showsHorizontalScrollIndicator={false}
				horizontal
			/>
		</View>
	)
}

export default Categories
