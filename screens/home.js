import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StackNavigation } from '@react-navigation/native';
import Signup from './signup';
import Signin from './signin';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
    return (
        <ScrollView style={styles.intro}>
            <View style={styles.intro}>
                <Text style={styles.textintro}>Welcome To EasyRoutes The Number One Taxi Ordering Company In Nigeria.</Text>
            </View>
            <Image source={require('../images/logo.jpg')} style={styles.image} />
            <View>
                <Text style={[styles.text]} >Pls Login</Text>
                <TouchableOpacity style={{}}>
                    <View style={styles.Login}>
                        <Text style={styles.logintxt} onPress={() => { navigation.navigate('Signup') }}>Signup</Text>
                    </View>
                </TouchableOpacity>
                <Text style={[styles.text]} >Or</Text>
                <TouchableOpacity style={{}}>
                    <View style={styles.Signup}>
                        <Text style={styles.logintxt} onPress={() => { navigation.navigate('Signin') }}>Signin</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.icons}>
                <Icon style={styles.icon} name='facebook-square' fill='blue' size={50} color='dodgerblue' />
                <Icon style={styles.icon} name='google' size={50} color='crimson' />
                <Icon style={styles.icon} name='apple' size={50} color='black' />
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({

    container: {
        padding: 25,
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontFamily: 'sans-serif',
        padding: 10,
    },
    icons: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    icon: {
        margin: 10,
    },
    Login: {
        width: '95%',
        margin: 10,
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'tomato',
        height: 65,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 300,
    },
    Signup: {
        width: '95%',
        margin: 10,
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'dodgerblue',
        height: 65,
        textAlign: 'center',
    },
    logintxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
    },
    textintro: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'sans-serif',
    },
    intro: {
        backgroundColor: '#fff',
        width: '100%',
    }
});
