import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>WELLiO</Text>
      <Image
        source={require('../assets/Wellio_Logo.png')}
        style={styles.image}
      />
      <Text style={styles.subtitle}>wellness in optimization</Text>
      <Text style={styles.welcome}>WELCOME</Text>
      <Text style={styles.onboard}>onboard</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text style={styles.buttonText}>New User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Existing User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9575CD', // Purple background
    padding: 0,
  },
  title: {
    fontFamily: 'Pompiere',
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 0,
  },
  image: {
    width: 250,
    height: 250,
  },
  subtitle: {
    fontFamily: 'Reenie Beanie',
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  welcome: {
    fontFamily: 'Sono',
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  onboard: {
    fontFamily: 'Sono',
    fontSize: 24,
    color: 'white',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F1DE3C', // Gold color
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    marginHorizontal: 100,
    opacity: 40,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Sono',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;