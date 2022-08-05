// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';

const Stack = createNativeStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Signup"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#3740FE',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ title: 'Signup' }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Login' }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={
                    { title: 'Dashboard' }
                }
            />
        </Stack.Navigator>
    );
}
export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}