// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/landing/splash';
import Landingscreen from './screens/landing/landingscreen';
import Signin from './screens/auth/signin';
import Signup from './screens/auth/signup';
import Homepage from './screens/home/homepage';
import Home from './screens/home';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="dodgerblue"/>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Splash} options={{headerShown: false,}}/>
        <Stack.Screen name="Easy Routes"  component={Home} options={{ headerTitleStyle:{
          color: 'white',
          fontFamily: 'monospace',
          fontSize: 25,
          alignItems: 'center',
          justifyContents: 'center'
        }, headerTitleAlign: "center", headerStyle:{
          backgroundColor: 'dodgerblue'
        }}} />
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
          headerShown: false,}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;