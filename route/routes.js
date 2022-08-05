import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Signup from './screens/signup';
export default function App() {
    const Stack = createNativeStackNavigator();
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
                    },
                }} />
                <Stack.Screen name='Signin' component={Signup} options={{
                    title: 'Signup',
                    headerStyle: {
                        backgroundColor: 'dodgerblue',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'monospace',
                    },
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
