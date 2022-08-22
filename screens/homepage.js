import { Text, View, Dimensions, StyleSheet, ScrollView, FlatList, Alert } from "react-native";
import { StackNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../components/Header";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { useState } from "react";
import Statusbar from 'expo-status-bar'
export default function Homepage({ navigation }) {
    const [name, setName] = useState('');
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <ScrollView>
            <View>
                <Header />
                <ScrollView>
                    <MapView 
                     initialRegion={{
                        latitude: 6.9746,
                        longitude:  4.8472,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                    provider={PROVIDER_GOOGLE}
                    style={{height: windowHeight, alignSelf: 'stretch', width: windowWidth,}} />
                    <Text>hi</Text>
                </ScrollView>
            </View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    introtext: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'monospace',
        color: 'white',
    },
    intro: {
        marginTop: 0,
        backgroundColor: '#1C62CA',
    }
})