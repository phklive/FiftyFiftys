import React, { createContext, useEffect, useState } from 'react'
import { getUser, removeUser, saveUser } from './user'

interface AuthProviderProps {
	children: React.ReactNode
}

export type AuthContextData = {
	token?: string
	signIn: (token: string) => void
	signOut: () => void
}

const defaultState = {
	authData: undefined,
	signIn: () => {},
	signOut: () => {},
}

export const AuthContext = createContext<AuthContextData>(defaultState)

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [token, setToken] = useState<string>()

	useEffect(() => {
		getUserFromStorage()
	}, [])

	const getUserFromStorage = async () => {
		try {
			const user = await getUser()
			if (!user) throw new Error('No user in storage.')
			setToken(user)
		} catch (e) {
			setToken(undefined)
		}
	}

	const signIn = (token: string) => {
		saveUser(token)
		setToken(token)
	}

	const signOut = async () => {
		removeUser()
		setToken(undefined)
	}

	return (
		<AuthContext.Provider value={{ token, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
