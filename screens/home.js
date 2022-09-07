import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StackNavigation } from '@react-navigation/native';
import Signup from './auth/signup';
import Signin from './auth/signin';
import Icon from 'react-native-vector-icons/FontAwesome';
import Socialicons from './auth/socialicons';

export default function Home({ navigation }) {
    return (
        <ScrollView style={styles.intro}>
            <Image source={require('../images/logo2.png')} style={styles.image} />
            <View>
                <TouchableOpacity style={{marginVertical: 10,}}>
                    <View style={styles.Login}>
                        <Text style={[styles.logintxt, {color: "dodgerblue",}]} onPress={() => { navigation.navigate('Signup') }}>Signup</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{}}>
                    <View style={styles.Signup}>
                        <Text style={styles.logintxt} onPress={() => { navigation.navigate('Signin') }}>Signin</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Socialicons/>
            <Text style={{flexStart: "bottom",
        fontFamily: 'monospace', paddingBottom: 0, textAlign: 'center'}}>Powered by spurex </Text>
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
        fontFamily: 'monospace',
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
        backgroundColor: '#fff',
        height: 65,
        textAlign: 'center',
        borderColor: "dodgerblue",
        borderWidth: 1,
    },
    image: {
        width: '100%',
        resizeMode: "contain"
    },
    Signup: {
        width: '95%',
        margin: 10,
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'dodgerblue',
        height: 70,
        textAlign: 'center',
        fontFamily: 'monospace',
    },
    logintxt: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 30,
    },
    textintro: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'monospace',
    },
    intro: {
        backgroundColor: '#fff',
        width: '100%',
    }
});
