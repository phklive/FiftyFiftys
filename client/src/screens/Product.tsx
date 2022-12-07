import React, { useEffect, useState } from 'react'
import {
	Image,
	Pressable,
	ScrollView,
	Text,
	View,
	Share,
	Alert,
} from 'react-native'
import tw from 'twrnc'
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack'
import {
	AppParams,
	GameStackParams,
	HomeStackParams,
} from '../navigation/Stack'
import {
	useLikeProductMutation,
	useProductQuery,
	useUnLikeProductMutation,
	useUserLikesQuery,
	UserLikesDocument,
	useCreateGameMutation,
	UserGamesDocument,
} from '../generated/graphql'
import Spinner from '../ui/Spinner'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import GameController from '../components/GameController'

type ProductProps = NativeStackScreenProps<HomeStackParams, 'Product'>

const Product: React.FC<ProductProps> = ({ route }) => {
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()
	const gameNavigation = useNavigation<NativeStackNavigationProp<AppParams>>()
	const [likeClicked, setLikeClicked] = useState<boolean>()
	const [selectedMode, setSelectedMode] = useState({ selectedItem: 0 })
	const [modeSelected, setModeSelected] = useState(false)

	const [likeProduct] = useLikeProductMutation({
		refetchQueries: [{ query: UserLikesDocument }],
	})
	const [unLikeProduct] = useUnLikeProductMutation({
		refetchQueries: [{ query: UserLikesDocument }],
	})

	const [createGame] = useCreateGameMutation({
		refetchQueries: [{ query: UserGamesDocument }],
	})

	const { loading, data, error } = useProductQuery({
		variables: { productId: route.params.id },
	})

	const { data: meData } = useUserLikesQuery()

	useEffect(() => {
		const productLiked = meData?.userLikes
			.map(el => el?.id)
			.includes(route.params.id)
		if (productLiked) {
			setLikeClicked(true)
		} else {
			setLikeClicked(false)
		}
	}, [meData])

	const likeClickHandler = async () => {
		if (likeClicked === false) {
			setLikeClicked(true)
			await likeProduct({ variables: { productId: route.params.id } })
		} else {
			setLikeClicked(false)
			await unLikeProduct({ variables: { productId: route.params.id } })
		}
	}

	const shareClickHandler = async () => {
		await Share.share({
			message: 'hello world',
		})
	}

	const selectHandler = (id: number) => {
		if (selectedMode.selectedItem === id) {
			setSelectedMode({ selectedItem: 0 })
			setModeSelected(false)
		} else {
			setSelectedMode({ selectedItem: id })
			setModeSelected(true)
		}
	}

	const playHandler = async () => {
		try {
			await createGame({
				variables: {
					productId: route.params.id,
					slots: selectedMode.selectedItem,
				},
			})
			Alert.alert('You entered the game successfully!')
			gameNavigation.navigate('GameStack')
		} catch (e: any) {
			Alert.alert('There has been an error')
			console.log(e)
		}
	}

	if (loading) return <Spinner />
	if (error) return <Text>There has been an error please reload.</Text>
	return (
		<ScrollView style={tw``} showsVerticalScrollIndicator={false}>
			<View style={[tw`flex flex-row mx-2`]}>
				<Pressable
					style={tw`bg-white rounded-full p-1 justify-center items-center w-10 h-10 m-2`}
					onPress={() => navigation.goBack()}
				>
					<Ionicons name={'chevron-back-outline'} size={20} color={'black'} />
				</Pressable>
				<View style={tw`flex flex-row ml-auto`}>
					<Pressable
						style={tw`bg-white rounded-full p-1 justify-center items-center w-10 h-10 m-2`}
						onPress={shareClickHandler}
					>
						<Ionicons name={'share-outline'} size={20} color={'black'} />
					</Pressable>
					<Pressable
						style={tw`bg-white rounded-full p-1 justify-center items-center w-10 h-10 m-2`}
						onPress={likeClickHandler}
					>
						<Ionicons
							name={likeClicked ? 'heart' : 'heart-outline'}
							size={20}
							color={'black'}
						/>
					</Pressable>
				</View>
			</View>
			<View style={tw`h-80 w-11/12 self-center rounded shadow-2xl mb-2`}>
				<Image
					source={{ uri: data?.product?.image }}
					style={tw`self-center rounded w-full h-full mt-2`}
					resizeMode={'cover'}
				/>
			</View>
			<View>
				<Text style={tw`text-2xl text-center mt-2`}>
					{data?.product?.title}
				</Text>
				<Text style={tw`text-xl font-bold text-center`}>
					{'$'}
					{data?.product?.price}
				</Text>
				<Text style={tw`text-xl text-center mt-4 mb-10`}>
					{data?.product?.description}
				</Text>
			</View>
			<View
				style={tw`${
					modeSelected ? '' : 'hidden'
				} w-11/12 p-2 rounded border-black border-2 bg-gray-400 self-center my-2`}
			>
				<Text style={tw`text-center text-xl`}>
					Entry price: {'$'}
					{data?.product?.price! / selectedMode.selectedItem}
				</Text>
			</View>
			<GameController
				handler={selectHandler}
				selectedItem={selectedMode.selectedItem}
			/>
			<Pressable
				style={tw`${
					modeSelected ? '' : 'hidden'
				} p-2 w-11/12 bg-yellow-200 self-center border-2 border-black my-2 rounded-2xl`}
				onPress={playHandler}
			>
				<Text style={tw`text-2xl text-center`}>Play!</Text>
			</Pressable>
		</ScrollView>
	)
}

export default Product
