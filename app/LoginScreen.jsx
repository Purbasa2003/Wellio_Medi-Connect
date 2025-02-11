import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('User Details:', { username, password, phone });
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
       <Text style={styles.title}>WELLiO</Text>
      <Image
        source={require('../assets/Wellio_Logo_withbg.png')} // Update with your image
        style={styles.image}
      />
      <Text style={styles.subtitle}>wellness in optimization</Text>
      <Text style={styles.login}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.hint}>Hint : Input Phone number</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9575CD', // Purple background
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  login: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  hint: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#D8B872', // Gold color
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 100,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;