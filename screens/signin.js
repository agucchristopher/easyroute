import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigation } from '@react-navigation/native';
import CountrySelectDropdown from "react-native-searchable-country-dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signin({ navigation }) {
    const [pass1, passv1] = useState(true);
    return (
        <ScrollView style={styles.container}>
            <View>
                <Image source={require('../images/logo.jpg')} style={styles.image} />
                <View style={styles.input}>
                    <Icon name='phone' style={styles.icon} size={30} color={'grey'} />
                    <TextInput style={styles.form} placeholder='Phone Number' maxLength={11} keyboardType='numeric' />
                </View>
                <View style={styles.input}>
                    <Icon name='key' style={styles.icon} size={30} color={'grey'} />
                    <TextInput style={styles.form} secureTextEntry={pass1} placeholder='Password' />
                    <Icon name='eye' style={[styles.icon, { marginLeft: 5, }]} size={30} color={'grey'} onPress={() => { passv1(!pass1) }} />
                </View>
                <TouchableOpacity>
                    <View style={styles.Login}>
                        <Text style={styles.logintxt} onPress={() => { navigation.navigate('Dashboard') }}>Signin</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>Or</Text>
                <View style={styles.icons}>
                    <Icon style={styles.iconf} name='facebook-square' fill='blue' size={50} color='dodgerblue' />
                    <Icon style={styles.iconf} name='google' size={50} color='crimson' />
                    <Icon style={styles.iconf} name='apple' size={50} color='black' />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                <Text style={{ fontSize: 20, marginBottom: 10, }} onPress={() => { navigation.navigate('Signup') }}>Already A User? Signup</Text>
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
        margin: 15,
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
        fontFamily: 'monospace',
        margin: 10,
    },
    Login: {
        width: '100%',
        padding: 5,
        borderRadius: 50,
        backgroundColor: 'green',
        height: 65,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 300,
    },
    logintxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
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
    }
});
