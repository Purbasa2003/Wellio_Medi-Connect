import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TelehealthScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Telehealth</Text>
      {/* Add telehealth components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    color: '#B2A4FF',
  },
});

export default TelehealthScreen;