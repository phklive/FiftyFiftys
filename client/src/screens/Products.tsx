import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack'
import React from 'react'
import ProductList from '../components/ProductList'
import SearchBar from '../components/SearchBar'
import { HomeStackParams } from '../navigation/Stack'
import { useProductsQuery } from '../generated/graphql'
import { useNavigation } from '@react-navigation/native'

type ProductsProps = NativeStackScreenProps<HomeStackParams, 'Products'>

const Products: React.FC<ProductsProps> = ({ route }) => {
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()
	const { loading, error, data } = useProductsQuery({
		variables: { search: route.params.search },
	})

	return (
		<>
			<SearchBar initialText={route.params.search} />
			<ProductList
				data={data?.products}
				loading={loading}
				error={error}
				navigation={navigation}
			/>
		</>
	)
}

export default Products
