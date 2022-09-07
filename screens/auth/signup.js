import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { StackNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { styles } from './styles';
import Socialicons from './socialicons';


export default function Signup({ navigation }) {

    const [pass, passv] = useState(true);
    const [pass1, passv1] = useState(true);
    const [phone, passw] = useState('');
    const [name, namev] = useState('');
    const [pass2, pass2v] = useState('');
    const [pass3, pass1v] = useState('');

    const register = async () => {
       Alert.alert("Hey", name)
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Image source={require('../../images/logo2.png')} style={styles.image} />
                <View style={styles.input}>
                    <Icon name='person' style={styles.icon} size={30} color={'grey'} />
                    <TextInput style={styles.form} placeholder='Full Name' onChangeText={(name) => namev(name)} />
                </View>
                <View style={styles.input}>
                    <Icon name='call-sharp' style={styles.icon} size={30} color={'grey'} />
                    <TextInput style={styles.form} placeholder='Phone Number' maxLength={11} keyboardType='numeric' onChangeText={phone => passw(phone)} />
                </View>
                <View style={styles.input}>
                    <Icon name='key' style={styles.icon} size={30} color={'grey'} />
                    <TextInput style={styles.form} secureTextEntry={pass} placeholder='Password' onChangeText={(pass) => pass1v(pass)} />
                    <Icon name='eye' style={[styles.icon, { marginRight: 15, }]} size={30} color={'grey'} onPress={() => { passv(!pass) }} />
                </View>
                <View style={styles.input}>
                    <Icon name='key' style={styles.icon} size={30} color={'grey'} />
                    <TextInput style={styles.form} secureTextEntry={pass1} placeholder='Re Password' onChangeText={(pas) => pass2v(pas)} />
                    <Icon name='eye' style={[styles.icon, { marginRight: 15, }]} size={30} color={'grey'} onPress={() => { pass(!pass1) }} />
                </View>
                <TouchableOpacity onPress={register}>
                    <View style={styles.Login} >
                        <Text style={styles.logintxt}>Signup</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>Or</Text>
               <Socialicons />
                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 20, marginBottom: 10, }} onPress={() => { navigation.navigate('Signin') }}>Already a user?
                        Signin </Text>
                </View>
            </View>
        </ScrollView >
    );
}


