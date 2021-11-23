import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import api from '../services/api';
import logo from '../assets/logo.png';

const Login = ({ navigation }) => {

  const [user, setUser] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (!user)
        return;

      navigation.navigate('Main', { user });
    });
  }, []);

  const handleLogin = async () => {

    const response = await api.post('/devs', { username: user });
    const { _id } = response.data;

    await AsyncStorage.setItem('user', _id);

    navigation.navigate('Main', { user: _id });
  }

  return (
    <View style={styles.container}>
      <Image source={logo} />

      <TextInput
        style={styles.input}
        placeholder="Digite seu usuario do github"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        value={user}
        onChangeText={setUser}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
    backgroundColor: '#fd267d',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});

export default Login;