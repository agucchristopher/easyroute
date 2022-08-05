import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from "expo-status-bar";

function Homeheader({ navigation }) {
    return (
        <View style={styles.container}>
            <Icon name="map-marker" size={30} color="white" onPress={() => { navigation.openDrawer(); }} />
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', letterSpacing: 1, }}> EasyRoutes </Text>
        </View>
    );
}

export default Homeheader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'dodgerblue',
        flex: 1,
        padding: 0,
        margin: 0,
    }
});