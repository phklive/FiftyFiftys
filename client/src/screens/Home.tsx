import React from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import SearchBar from '../components/SearchBar'
import { useProductsQuery } from '../generated/graphql'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeStackParams } from '../navigation/Stack'
import POTX from './POTX'

const Home: React.FC = () => {
	const { loading, error, data } = useProductsQuery()
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()

	return (
		<View style={tw`flex-1`}>
			<SearchBar initialText="" />
			<ProductList
				data={data?.products}
				loading={loading}
				error={error}
				header={
					<>
						<POTX />
						<CategoryList />
					</>
				}
				navigation={navigation}
			/>
		</View>
	)
}

export default Home
