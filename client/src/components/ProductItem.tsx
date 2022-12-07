import React from 'react'
import { Text, Image, Pressable } from 'react-native'
import tw from 'twrnc'
import { Scalars } from '../generated/graphql'

type Product = {
	__typename?: 'Product' | undefined
	description: Scalars['String']
	id: Scalars['String']
	image: Scalars['String']
	price: Scalars['Int']
	tags: Array<Scalars['String']>
	title: Scalars['String']
	navigation: any
}

const ProductItem: React.FC<Product> = ({
	id,
	image,
	price,
	title,
	navigation,
}) => {
	return (
		<Pressable
			style={tw`flex flex-col items-center mx-auto my-3`}
			onPress={() => navigation.navigate('Product', { id })}
		>
			<Image
				source={{
					uri: `${image}`,
				}}
				style={[tw`rounded-xl `, { width: 150, height: 150 }]}
			/>
			<Text style={tw`mt-2 font-bold`}>{`$${price}`}</Text>
			<Text style={tw`text-xl font-bold`}>{title}</Text>
		</Pressable>
	)
}

export default ProductItem
