import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecommendationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Goal Tracker</Text>
      {/* Add recommendation components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    color: '#B2A4FF',
  },
});

export default RecommendationsScreen;