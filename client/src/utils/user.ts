import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

export const saveUser = async (token: string) => {
	try {
		await AsyncStorage.setItem('@token', token)
	} catch (e: any) {
		console.log(e.message, 'Error saving token.')
	}
}

export const getUser = async () => {
	try {
		const token = await AsyncStorage.getItem('@token')
		return token != null ? token : null
	} catch (e: any) {
		console.log(e.message, 'Error getting token.')
	}
}

export const removeUser = () => {
	AsyncStorage.removeItem('@token').then(() => Alert.alert('Logged out'))
}
