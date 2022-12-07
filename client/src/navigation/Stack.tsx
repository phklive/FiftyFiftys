import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Splash from '../screens/Splash'
import Header from '../ui/Header'
import Products from '../screens/Products'
import Flash from '../screens/Flash'
import Product from '../screens/Product'
import Store from '../screens/Store'
import Notifications from '../screens/Notifications'
import Likes from '../screens/Likes'
import Games from '../screens/Games'
import Game from '../screens/Game'

export type AppParams = {
	HomeStack: undefined
	ProfileStack: undefined
	Flash: undefined
	GameStack: undefined
	LikesStack: undefined
}

export type HomeStackParams = {
	Home: undefined
	Likes: undefined
	Store?: { refetch: () => void }
	Payment: { amount: number }
	Products: { search: string }
	Product: {
		id: string
		title?: string
		image?: string
		price?: number
	}
}

export type ProfileStackParams = {
	Profile: undefined
	Notifications: undefined
}

export type LikeStackParams = {
	Likes: undefined
	Product: {
		id: string
		title?: string
		image?: string
		price?: number
	}
}

export type GameStackParams = {
	Games: undefined
	Game: {
		id: string
	}
}

export type AuthParams = {
	Splash: undefined
	SignIn: undefined
	SignUp: undefined
}

const AppNav = createBottomTabNavigator<AppParams>()
const AuthNav = createStackNavigator<AuthParams>()

const HomeNav = createStackNavigator<HomeStackParams>()
const LikeNav = createStackNavigator<LikeStackParams>()
const GameNav = createStackNavigator<GameStackParams>()
const ProfileNav = createStackNavigator<ProfileStackParams>()

const HomeStack: React.FC = () => (
	<HomeNav.Navigator
		screenOptions={{
			headerShown: false,
		}}
		initialRouteName={'Home'}
	>
		<HomeNav.Screen name="Home" component={Home} />
		<HomeNav.Screen name="Products" component={Products} />
		<HomeNav.Screen name="Product" component={Product} />
		<HomeNav.Screen name="Store" component={Store} />
	</HomeNav.Navigator>
)

const ProfileStack: React.FC = () => (
	<ProfileNav.Navigator
		screenOptions={{
			headerShown: false,
		}}
		initialRouteName={'Profile'}
	>
		<ProfileNav.Screen name="Profile" component={Profile} />
		<ProfileNav.Screen name="Notifications" component={Notifications} />
	</ProfileNav.Navigator>
)

const LikesStack: React.FC = () => (
	<LikeNav.Navigator
		screenOptions={{
			headerShown: false,
		}}
		initialRouteName={'Likes'}
	>
		<LikeNav.Screen name="Likes" component={Likes} />
		<LikeNav.Screen name="Product" component={Product} />
	</LikeNav.Navigator>
)

const GameStack: React.FC = () => (
	<GameNav.Navigator
		screenOptions={{
			headerShown: false,
		}}
		initialRouteName={'Games'}
	>
		<GameNav.Screen name="Games" component={Games} />
		<GameNav.Screen name="Game" component={Game} />
	</GameNav.Navigator>
)

export const App: React.FC = () => {
	return (
		<>
			<Header />
			<AppNav.Navigator
				initialRouteName={'HomeStack'}
				screenOptions={({ route }) => ({
					headerShown: false,
					headerLeft: () => null,
					tabBarIcon: ({ focused, color, size }) => {
						let iconName
						if (route.name === 'HomeStack') {
							iconName = focused ? 'home-outline' : 'home-outline'
						} else if (route.name === 'ProfileStack') {
							iconName = focused ? 'person-outline' : 'person-outline'
						} else if (route.name === 'Flash') {
							iconName = focused ? 'flash-outline' : 'flash-outline'
						} else if (route.name === 'GameStack') {
							iconName = focused
								? 'game-controller-outline'
								: 'game-controller-outline'
						} else if (route.name === 'LikesStack') {
							iconName = focused ? 'heart-outline' : 'heart-outline'
						}
						return <Ionicons name={iconName as any} size={size} color={color} />
					},
					tabBarStyle: {
						backgroundColor: '#2b2d42',
						borderBottomColor: '#2b2d42',
						borderTopColor: '#2b2d42',
						borderWidth: 2,
					},
					tabBarActiveTintColor: '#edf2f4',
					tabBarInactiveTintColor: '#8d99ae',
				})}
			>
				<AppNav.Group>
					<AppNav.Screen
						name="HomeStack"
						component={HomeStack}
						options={{ title: 'Home' }}
					/>
					<AppNav.Screen
						name="GameStack"
						component={GameStack}
						options={{ title: 'Games' }}
					/>
					<AppNav.Screen name="Flash" component={Flash} />
					<AppNav.Screen
						name="LikesStack"
						component={LikesStack}
						options={{ title: 'Likes' }}
					/>
					<AppNav.Screen
						name="ProfileStack"
						component={ProfileStack}
						options={{ title: 'Profile' }}
					/>
				</AppNav.Group>
			</AppNav.Navigator>
		</>
	)
}

export const Auth: React.FC = () => {
	return (
		<>
			<Header />
			<AuthNav.Navigator
				initialRouteName={'Splash'}
				screenOptions={{
					headerShown: false,
					headerLeft: () => null,
				}}
			>
				<AuthNav.Group>
					<AuthNav.Screen name="Splash" component={Splash} />
					<AuthNav.Screen name="SignIn" component={SignIn} />
					<AuthNav.Screen name="SignUp" component={SignUp} />
				</AuthNav.Group>
			</AuthNav.Navigator>
		</>
	)
}
