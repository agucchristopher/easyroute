import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState, useEffect } from 'react';

export default function Signin({ navigation }) {
    const [passh, hidepass] = useState(true);
    return (
        <ScrollView style={styles.container}>
            <View>
            <Image source={require('../../images/logo2.png')} style={styles.image} />
                  <View style={styles.input}>
                    <Icon name='phone' style={styles.icon} size={30} color={'grey'} />
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
                <Text style={styles.text}>Or</Text>
                <View style={styles.icons}>
                    <Icon style={styles.iconf} name='facebook-square' fill='blue' size={50} color='#1C62CA' />
                    <Icon style={styles.iconf} name='google' size={50} color='crimson' />
                    <Icon style={styles.iconf} name='apple' size={50} color='black' />
                </View>
            </View>
        </ScrollView >
    );
}


const styles = StyleSheet.create({
    icon: {
        marginRight: 10,
    },
    icons: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    iconf: {
        margin: 5,
        marginBottom: 5,
    },
    container: {
        padding: 1,
        textAlign: 'center',
        width: '100%',
        backgroundColor: 'white',
    },
    text: {
        textAlign: 'center',
        color: '#000',
        fontSize: 30,
        fontFamily: 'fantasy',
        margin: 10,
    },
    Login: {
        width: '95%',
        margin: 10,
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#fff',
        height: 65,
        textAlign: 'center',
        fontFamily: 'fantasy',
        borderColor: "dodgerblue",
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: "contain"
    },
    logintxt: {
        textAlign: 'center',
        color: 'dodgerblue',
        fontSize: 30,
        fontFamily: 'monospace',
    },
    input: {
        flexDirection: 'row',
        width: '90%',
        borderColor: '#777',
        padding: 10,
        margin: 15,
        fontFamily: 'monospace',
        borderWidth: 2,
        borderRadius: 25,
        borderStyle: 'solid',
        backgroundColor: 'white',
        alignContent: 'center',
    },
    form: {
        width: '70%',
        fontSize: 20,
        fontFamily: 'monospace',
    }
});

