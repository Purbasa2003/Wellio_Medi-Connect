import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/WelcomeScreen';
import CreateAccountScreen from './app/CreateAccountScreen'; 
import LoginScreen from './app/LoginScreen';
import HomeScreen from './app/HomeScreen';
import PreHomeScreen from './app/PreHomeScreen';
import HealthTrackingScreen from './app/HealthTrackingScreen';
import RecommendationsScreen from './app/RecommendationsScreen';
import EmpowermentHubScreen from './app/EmpowermentHubScreen';
import TelehealthScreen from './app/TelehealthScreen';
import ProfileScreen from './app/ProfileScreen';
import SettingsScreen from './app/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} /> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PreHome" component={PreHomeScreen} />
        <Stack.Screen name="HealthTracking" component={HealthTrackingScreen} />
        <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
        <Stack.Screen name="EmpowermentHub" component={EmpowermentHubScreen} />
        <Stack.Screen name="Telehealth" component={TelehealthScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}