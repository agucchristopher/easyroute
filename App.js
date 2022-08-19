// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/splash';
import Landingscreen from './screens/landingscreen';
import Signin from './screens/signin';
import Signup from './screens/signup';
import Homepage from './screens/homepage';
import Home from './screens/home';
const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
/*<Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="Home" component={HomeScreen} />
<Drawer.Screen name="Notifications" component={NotificationsScreen} />
</Drawer.Navigator>*/

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Splash} options={{headerShown: false,}}/>
        <Stack.Screen name="Easy Routes"  component={Home} options={{ headerTitleStyle:{
          color: 'white',
          fontFamily: 'monospace',
          fontSize: 25,
          alignItems: 'center',
          justifyContents: 'center'
        }, headerStyle:{
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