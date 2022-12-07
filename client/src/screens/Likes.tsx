import React from 'react'
import tw from 'twrnc'
import { Text, View } from 'react-native'
import ProductList from '../components/ProductList'
import { useUserLikesQuery } from '../generated/graphql'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LikeStackParams } from '../navigation/Stack'
import Spinner from '../ui/Spinner'

interface LikesProps {}

const Likes: React.FC<LikesProps> = ({}) => {
	const { loading, error, data } = useUserLikesQuery({
		fetchPolicy: 'network-only',
	})
	const navigation = useNavigation<NativeStackNavigationProp<LikeStackParams>>()

	if (loading) return <Spinner />
	if (error) return <Text>There has been an error {error.message}</Text>
	return (
		<View style={tw`flex-1`}>
			<Text style={tw`text-center text-3xl my-2`}>Your liked products</Text>
			{data?.userLikes?.length! > 0 ? (
				<ProductList
					data={data?.userLikes}
					loading={loading}
					error={error}
					navigation={navigation}
				/>
			) : (
				<Text style={tw`text-2xl text-center`}>You have no liked products</Text>
			)}
		</View>
	)
}

export default Likes
