import React from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import tw from 'twrnc'
import useAuth from '../utils/useAuth'
import { useSignInUserMutation } from '../generated/graphql'
import { AuthParams } from '../navigation/Stack'
import ButtonUI from '../ui/ButtonUI'
import Spinner from '../ui/Spinner'

const SignIn: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<AuthParams>>()
	const [signInMutation, { loading, data }] = useSignInUserMutation()
	const { signIn } = useAuth()

	const loginHandler = async (email: string, password: string) => {
		try {
			const token = await signInMutation({ variables: { email, password } })
			signIn(token.data?.signInUser.token as string)
			Alert.alert('Successfully logged in.')
		} catch (e: any) {
			Alert.alert(e.message)
		}
	}

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().min(3, 'must be long').required('Email is required.'),
			password: Yup.string().required('Password is required.'),
		}),
		onSubmit: values => {
			loginHandler(values.email, values.password)
		},
	})

	return (
		<View
			style={[
				tw`flex-1 justify-center`,
				{ backgroundColor: 'rgba(240,238,243,255)' },
			]}
		>
			<Text style={tw`text-center text-4xl mb-4`}>Hello Again!</Text>
			<Text style={tw`text-center text-xl mb-10`}>
				Welcome back you've{'\n'}been missed!
			</Text>
			<View style={tw`flex flex-col `}>
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
				<Text style={tw`ml-8 mt-2 text-base`}>Forgot your password?</Text>
				{loading ? (
					<Spinner />
				) : (
					<ButtonUI onPress={() => formik.handleSubmit()} text="Sign in" />
				)}
			</View>
			<Text style={tw`ml-8 text-base`}>
				Don't have an account?
				<Text
					style={tw`text-blue-500`}
					onPress={() => navigation.navigate('SignUp')}
				>
					{' '}
					Register now.
				</Text>
			</Text>
		</View>
	)
}

export default SignIn
