import React, { useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native'
import {
	PanGestureHandler,
	PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
	interpolate,
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated'
import FlashCard from './FlashCard'
import tw from 'twrnc'

interface FlashStackProps {
	data: any
	onSwipeRight: () => void
	onSwipeLeft: () => void
}

const FlashStack: React.FC<FlashStackProps> = ({
	data,
	onSwipeLeft,
	onSwipeRight,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [nextIndex, setNextIndex] = useState(currentIndex + 1)
	const currentProduct = data[currentIndex]
	const nextProduct = data[nextIndex]

	const { width } = useWindowDimensions()
	const hiddenX = 1.5 * width
	const x = useSharedValue(0)
	const y = useSharedValue(0)
	const rotate = useDerivedValue(
		() => interpolate(x.value, [0, hiddenX], [0, 60]) + 'deg'
	)

	const cardStyle = useAnimatedStyle(() => ({
		transform: [
			{
				translateX: x.value,
			},
			{
				translateY: y.value,
			},
			{
				rotate: rotate.value,
			},
		],
	}))

	const nextCardStyle = useAnimatedStyle(() => ({
		transform: [
			{
				scale: interpolate(x.value, [-hiddenX, 0, hiddenX], [1, 0.8, 1]),
			},
		],
		opacity: interpolate(x.value, [-hiddenX, 0, hiddenX], [1, 0.9, 1]),
	}))

	const likeStyle = useAnimatedStyle(() => ({
		opacity: interpolate(x.value, [-width / 3, 0], [1, 0]),
	}))

	const nopeStyle = useAnimatedStyle(() => ({
		opacity: interpolate(x.value, [0, width / 3], [0, 1]),
	}))

	const gestureHandler = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		{ startX: number; startY: number }
	>({
		onStart: (_, ctx) => {
			ctx.startX = x.value
			ctx.startY = y.value
		},
		onActive: (e, ctx) => {
			x.value = ctx.startX + e.translationX
			y.value = ctx.startY + e.translationY
		},
		onEnd: e => {
			if (Math.abs(e.velocityX) < 800) {
				x.value = withSpring(0)
				y.value = withSpring(0)
				return
			}

			x.value = withSpring(hiddenX * Math.sign(e.velocityX), {}, () => {
				runOnJS(setCurrentIndex)(currentIndex + 1)
			})
			y.value = withSpring(Math.sign(0))

			const onSwipe = e.velocityX > 0 ? onSwipeRight : onSwipeLeft
			runOnJS(onSwipe)()
		},
	})

	useEffect(() => {
		x.value = 0
		y.value = 0
		setNextIndex(currentIndex + 1)
	}, [currentIndex, x])
	return (
		<>
			{nextProduct && (
				<Animated.View
					style={[tw`self-center w-11/12 h-11/12 absolute`, nextCardStyle]}
				>
					<FlashCard
						title={nextProduct.title}
						image={nextProduct.image}
						price={nextProduct.price}
					/>
				</Animated.View>
			)}
			{currentProduct && (
				<PanGestureHandler onGestureEvent={gestureHandler}>
					<Animated.View
						style={[
							tw`w-11/12 h-11/12 self-center `,
							{
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 7,
								},
								shadowOpacity: 0.71,
								shadowRadius: 9.11,

								elevation: 14,
							},
							cardStyle,
						]}
					>
						<Animated.Image
							source={require('../../assets/nope.png')}
							style={[tw`h-40 w-40 absolute z-10 right-2`, likeStyle]}
							resizeMode={'contain'}
						/>
						<Animated.Image
							source={require('../../assets/LIKE.png')}
							style={[tw`h-40 w-40 absolute z-10 left-2`, nopeStyle]}
							resizeMode={'contain'}
						/>
						<FlashCard
							title={currentProduct.title}
							image={currentProduct.image}
							price={currentProduct.price}
						/>
					</Animated.View>
				</PanGestureHandler>
			)}
		</>
	)
}

export default FlashStack
