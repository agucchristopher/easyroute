import React from 'react'
import {Text, Statusbar, StyleSheet, SafeAreaView, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const Splash = ({navigation}) => {
 function load() {
    navigation.replace('Easy Routes');
 }
 setTimeout(load,3000)
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require("../images/logo2.png")} />
    <Text style={{fontSize: 25,}}> <Icon name="map-marker" size={30}/> Easy Routes</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
})
export default Splash