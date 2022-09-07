import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from "react-native-vector-icons/FontAwesome"
const Socialicons = () => {
  return (
    <View>
       <View style={styles.icons}>
                    <Icon style={styles.iconf} name='facebook-square' fill='blue' size={50} color='#1C62CA' />
                    <Icon style={styles.iconf} name='google' size={50} color='crimson' />
                    <Icon style={styles.iconf} name='apple' size={50} color='black' />
                </View>
    </View>
  )
}

export default Socialicons