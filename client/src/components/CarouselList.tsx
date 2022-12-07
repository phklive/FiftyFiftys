import React, { useCallback, useState } from 'react'
import tw from 'twrnc'
import {
	FlatList,
	Text,
	useWindowDimensions,
	ListRenderItem,
	View,
	Image,
} from 'react-native'
import { product } from '../types'
import CarouselItem from './CarouselItem'

const data: product[] = [
	{
		id: 1,
		price: 15000,
		title: 'Car',
		image:
			'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
	},
	{
		id: 2,
		price: 200,
		title: 'Makeup',
		image:
			'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80',
	},
	{
		id: 3,
		price: 3000,
		title: 'Trip',
		image:
			'https://images.unsplash.com/photo-1589806036187-fcbc6a7a23b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1896&q=80',
	},
]

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = ({}) => {
	const { width } = useWindowDimensions()
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const renderItem: ListRenderItem<product> = ({ item }) => {
		return <CarouselItem image={item.image} />
	}
	const viewableItemHandler = useCallback((item: any) => {
		if (item.viewableItems.length > 0) {
			setActiveIndex(item.viewableItems[0].index || 0)
		}
	}, [])

	return (
		<View style={tw`flex`}>
			<FlatList
				data={data}
				renderItem={renderItem}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				snapToInterval={width - 20}
				snapToAlignment={'center'}
				decelerationRate={'fast'}
				viewabilityConfig={{
					viewAreaCoveragePercentThreshold: 50,
				}}
				onViewableItemsChanged={viewableItemHandler}
				keyExtractor={item => item.id.toString()}
			/>
			<View style={tw`flex flex-row items-center self-center mt-2`}>
				{data.map((item, i) => (
					<View
						style={tw`h-3 w-3 border-gray-500 border rounded-full mx-2 ${
							activeIndex === i ? 'bg-gray-500' : 'bg-gray-200'
						}`}
						key={item.id}
					/>
				))}
			</View>
		</View>
	)
}

export default Carousel
