import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmpowermentHubScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empowerment Hub</Text>
      {/* Add community and resource components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB6C1',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default EmpowermentHubScreen;