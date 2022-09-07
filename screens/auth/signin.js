import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import { styles } from './styles';
import Socialicons from './socialicons';

export default function Signin({ navigation }) {
    const [passh, hidepass] = useState(true);
    return (
        <ScrollView style={styles.container}>
            <View>
            <Image source={require('../../images/logo2.png')} style={styles.image} />
                  <View style={styles.input}>
                    <Icon name='call' style={styles.icon} size={30} color={'grey'} />
                    <TextInput style={styles.form} placeholder='Phone Number' maxLength={11} keyboardType='numeric' />
                </View>
                <View style={styles.input}>
                    <Icon name='key' style={styles.icon} size={30} color={'grey'} />
                    <TextInput style={styles.form} secureTextEntry={passh} placeholder='Password'  />
                    <Icon name='eye' style={[styles.icon, { marginRight: 10, }]} size={30} color={'grey'} onPress={() => { hidepass(!passh) }} />
                </View>
                
                <TouchableOpacity>
                    <View style={styles.Login}>
                        <Text style={styles.logintxt} onPress={() => { navigation.navigate('Dashboard') }}>Signin</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"flex-end", backgroundColor: "dodgeblue", margin: 5}}>
                    <Text style={{color: "black", fontWeight:"bold", fontSize:16}}>Forgot Password?</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView >
    );
}


