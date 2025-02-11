import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Wellio</Text>
      <Button title="Health Tracking" onPress={() => navigation.navigate('HealthTracking')} />
      <Button title="Recommendations" onPress={() => navigation.navigate('Recommendations')} />
      <Button title="Empowerment Hub" onPress={() => navigation.navigate('EmpowermentHub')} />
      <Button title="Telehealth" onPress={() => navigation.navigate('Telehealth')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2A4FF',
  },
  title: {
    fontSize: 24,
    color: '#FFF3A4',
    marginBottom: 20,
  },
});

export default HomeScreen;