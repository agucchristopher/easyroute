import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
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
        fontFamily: 'monospace',
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
        fontFamily: 'monospace',
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

