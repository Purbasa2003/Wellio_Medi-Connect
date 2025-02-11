import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthTrackingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Tracking</Text>
      {/* Add health tracking components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3A4',
  },
  title: {
    fontSize: 24,
    color: '#B2A4FF',
  },
});

export default HealthTrackingScreen;