import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/WelcomeScreen';
import CreateAccountScreen from './app/CreateAccountScreen'; 
import LoginScreen from './app/LoginScreen';
import HomeScreen from './app/HomeScreen';
import PreHomeScreen from './app/PreHomeScreen';
import VitalViewScreen from './app/VitalViewScreen';
import GoalsScreen from './app/GoalsScreen';
import EmpowermentHubScreen from './app/EmpowermentHubScreen';
import CommunityConnectScreen from './app/CommunityConnectScreen';

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
        <Stack.Screen name="VitalView" component={VitalViewScreen} />
        <Stack.Screen name="Goals" component={GoalsScreen} />
        <Stack.Screen name="EmpowermentHub" component={EmpowermentHubScreen} />
        <Stack.Screen name="CommunityConnect" component={CommunityConnectScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}