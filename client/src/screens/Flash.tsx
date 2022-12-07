import React from 'react'
import tw from 'twrnc'
import { View } from 'react-native'
import FlashStack from '../components/FlashStack'

const data = [
	{
		image:
			'https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		title: 'Iphone 13 Pro Max',
		price: 100000,
	},
	{
		image:
			'https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		title: 'Iphone 13 Pro Max',
		price: 100000,
	},
	{
		image:
			'https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		title: 'Iphone 13 Pro Max',
		price: 100000,
	},
	{
		image:
			'https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		title: 'Iphone 13 Pro Max',
		price: 100000,
	},
	{
		image:
			'https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		title: 'Iphone 13 Pro Max',
		price: 100000,
	},
	{
		image:
			'https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		title: 'Iphone 13 Pro Max',
		price: 100000,
	},
	{
		image:
			'https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		title: 'Iphone 13 Pro Max',
		price: 100000,
	},
	{
		image:
			'https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		title: 'Iphone 13 Pro Max',
		price: 100000,
	},

	{
		image:
			'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		title: 'Audi R8 2022',
		price: 300000000,
	},
	{
		image:
			'https://cdn.pixabay.com/photo/2022/03/22/20/16/yatch-7085894_1280.jpg',
		title: 'Yatch 100 metres',
		price: 100000000000,
	},
]

const Flash: React.FC = () => {
	const onSwipeRight = () => {
		console.warn('Swipe right')
	}
	const onSwipeLeft = () => {
		console.warn('Swipe left')
	}

	return (
		<View style={tw`flex-1 justify-center`}>
			<FlashStack
				data={data}
				onSwipeLeft={onSwipeLeft}
				onSwipeRight={onSwipeRight}
			/>
		</View>
	)
}

export default Flash
