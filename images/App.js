import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Signup from './screens/signup';
import Signin from './screens/signin';
import Homepage from './screens/homepage';
import React from 'react';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Homestack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homescreen" component={Home} options={{
          title: 'EasyRoutes',
          headerStyle: {
            backgroundColor: 'dodgerblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'monospace',
            fontSize: 30,
            textAlign: 'center',
          },
        }} />
        <Stack.Screen name='Signup' component={Signup} options={{
          title: 'Signup',
          headerStyle: {
            backgroundColor: 'dodgerblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'monospace',
            fontSize: 30,
          },
        }} />
        <Stack.Screen name='Signin' component={Signin} options={{
          title: 'Signin',
          headerStyle: {
            backgroundColor: 'dodgerblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'monospace',
            fontSize: 30,
          },
        }} />
        <Stack.Screen name='Dashboard' component={Homepage} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

