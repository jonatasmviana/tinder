import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { KeyboardAvoidingView, Platform, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';

export default function Login({ navigation }) {

	const [user, setUser] = useState('');

	function handleLogin() {
		console.log(user);
		navigation.navigate('Main');
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			enabled={Platform.OS === 'ios'}
			behavior="padding">
			<Image source={logo} />

			<TextInput
				style={styles.input}
				value={user}
				placeholder="Digite seu usuario do github"
				autoCorrect={false}
				onChangeText={setUser}
				autoCapitalize="none"
				placeholderTextColor="#999" />

			<TouchableOpacity
				style={styles.button}
				onPress={handleLogin}>

				<Text style={styles.buttonText}>ENTRAR</Text>

			</TouchableOpacity>

		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f5f5f5',
	},
	input: {
		height: 46,
		alignSelf: 'stretch',
		marginTop: 20,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 4,
		backgroundColor: '#fff',
		paddingHorizontal: 15,
	},
	button: {
		height: 46,
		alignSelf: 'stretch',
		marginTop: 10,
		alignItems: 'center',
		borderRadius: 3,
		justifyContent: 'center',
		backgroundColor: '#ff7854',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16
	}
});