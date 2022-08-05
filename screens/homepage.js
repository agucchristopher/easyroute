import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { StackNavigation } from '@react-navigation/native';
import CountrySelectDropdown from "react-native-searchable-country-dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';
import Homeheader from "../global/components/Homeheader";
export default function Homepage({ navigation }) {
    return (
        <ScrollView>
            <View>
                <View style={styles.header}>
                    <Icon name="map-marker" size={30} color="white" onPress={() => { navigation.openDrawer(); }} />
                    <Text style={{ color: 'white', fontSize: 30, padding: 10, fontWeight: 'bold', letterSpacing: 1, }}> EasyRoutes </Text>
                </View>
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
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-',
        width: '100%',
        backgroundColor: 'dodgerblue',
        padding: 30,
        margin: 0,
    }
})