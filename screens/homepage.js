import { Text, View, StyleSheet, ScrollView, FlatList, Alert } from "react-native";
import { StackNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Homeheader from "../components/Homeheader";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Homepage({ navigation }) {
    const [name, setName] = useState('');
    /* const getData = async () => {
         try {
             const value = await AsyncStorage.getItem('Username').then(
                 value => {
                     if (value !== null) {
                         console.log("value")
                         setName(value)
                     } else {
                         navigation.navigate("Signup")
                     }
                 }
             )
         } catch (e) {
             console.log(e)
         }
     } */

    return (
        <ScrollView>
            <View>
                <Homeheader />
                <ScrollView>
                    <Text>{getData ? console.log("done") : console.log("error")}</Text>
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
        backgroundColor: 'dodgerblue',
    }
})