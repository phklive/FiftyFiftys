import React from 'react'
import { ActivityIndicator } from 'react-native'

const Spinner: React.FC = () => {
	return (
		<>
			<ActivityIndicator size={'large'} color={'blue'} />
		</>
	)
}

export default Spinner
