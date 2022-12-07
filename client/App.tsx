import {
	ApolloClient,
	createHttpLink,
	ApolloProvider,
	InMemoryCache,
} from '@apollo/client'
import { StatusBar } from 'expo-status-bar'
import { setContext } from '@apollo/client/link/context'
import { getUser } from './src/utils/user'
import Router from './src/navigation/Router'
import AuthProvider from './src/utils/AuthContext'
import HeaderFF from './src/ui/Header'

const httpLink = createHttpLink({
	uri: 'https://fiftyfiftys.herokuapp.com/graphql',
	// uri: 'http://localhost:4000/graphql',
})

const authLink = setContext(async (_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = await getUser()
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	credentials: 'include',
	cache: new InMemoryCache(),
})

export default function App() {
	return (
		<ApolloProvider client={client}>
			<AuthProvider>
				<Router />
				<StatusBar style="auto" />
			</AuthProvider>
		</ApolloProvider>
	)
}
