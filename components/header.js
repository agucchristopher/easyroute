import { SafeAreaView, Text, Platform, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar style="light" />
      <Text style={styles.text}> <Icon name="map-marker" size={25}/> Easy Routes</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: "#1C62CA",
        height: 70,
        alignItems: "center",
        justifyContent: "center"

        
    },
    text: {
      color: "white",
      textAlign: "center",
      fontSize: 25,
      fontFamily: "monospace"
    }
})
export default Header