import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function Homeheader() {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 30, }}> EasyRoutes </Text>
        </View>
    );
}

export default Homeheader;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'dodgerblue',
        flex: 1,
        padding: 25,
        margin: 0,
        height: '30%',
    }
});