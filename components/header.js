import { SafeAreaView, Text, Platform, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
const Header = ({bg}) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text> <Icon name="map-marker" size={25}/> Easy Routes</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        backgroundColor: "dodgerblue",
    }
})
export default Header