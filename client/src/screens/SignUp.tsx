import React from 'react'
import tw from 'twrnc'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import ButtonUI from '../ui/ButtonUI'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import useAuth from '../utils/useAuth'
import { useCreateUserMutation } from '../generated/graphql'
import { AuthParams } from '../navigation/Stack'

const SignUp: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<AuthParams>>()
	const [signUpMutation] = useCreateUserMutation()
	const { signIn } = useAuth()

	const signUpHandler = async (
		name: string,
		email: string,
		password: string
	) => {
		try {
			const token = await signUpMutation({
				variables: { name, email, password },
			})
			signIn(token.data?.createUser.token as string)
			Alert.alert('Successfully signed up.')
		} catch (e: any) {
			Alert.alert(e.message)
		}
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(3, 'Must be longer than 3 characters.')
				.max(20, 'Must not be longer than 20 characters.')
				.required('Name is required.'),
			email: Yup.string().min(3, 'must be long').required('Email is required.'),
			password: Yup.string().required('Password is required.'),
		}),
		onSubmit: values => {
			signUpHandler(values.name, values.email, values.password)
		},
	})

	return (
		<View
			style={[
				tw`flex-1 justify-center`,
				{ backgroundColor: 'rgba(240,238,243,255)' },
			]}
		>
			<Text style={tw`text-center text-4xl mb-4`}>
				Welcome to{'\n'}FiftyFiftys!
			</Text>
			<Text style={tw`text-center text-xl mb-10`}>
				We are glad to meet you!
			</Text>
			<View style={tw`flex flex-col `}>
				<TextInput
					style={tw`self-center bg-white rounded py-4 px-2 my-2 w-10/12`}
					placeholder="Enter name"
					onChangeText={formik.handleChange('name')}
					onBlur={formik.handleBlur('name')}
					value={formik.values.name}
					autoCapitalize="none"
				/>

				<TextInput
					style={tw`self-center bg-white rounded py-4 px-2 my-2 w-10/12`}
					placeholder="Enter email"
					onChangeText={formik.handleChange('email')}
					onBlur={formik.handleBlur('email')}
					value={formik.values.email}
					autoCapitalize="none"
				/>

				<TextInput
					style={tw`self-center bg-white rounded py-4 px-2 my-2 w-10/12`}
					placeholder="Enter your password"
					onChangeText={formik.handleChange('password')}
					onBlur={formik.handleBlur('password')}
					value={formik.values.password}
					autoCapitalize="none"
					secureTextEntry={true}
				/>
				<ButtonUI onPress={() => formik.handleSubmit()} text="Register" />
			</View>
			<Text style={tw`ml-8 text-base`}>
				Already have an account?
				<Text
					style={tw`text-blue-500`}
					onPress={() => navigation.navigate('SignIn')}
				>
					{' '}
					Sign In.
				</Text>
			</Text>
		</View>
	)
}

export default SignUp

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'gray',
		padding: 5,
		margin: 5,
		borderRadius: 10,
	},
	question: {
		fontSize: 17,
		textAlign: 'center',
	},
	questionLink: {},
	textInput: {
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: 'black',
		padding: 5,
		marginVertical: 5,
		borderRadius: 20,
		fontSize: 20,
	},
	button: {
		textAlign: 'center',
		borderWidth: 2,
		padding: 4,
		marginTop: 10,
		borderRadius: 10,
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black',
		fontSize: 20,
	},
})
