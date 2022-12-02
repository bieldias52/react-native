import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";
import Flag from "./Flag";

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                    style={styles.flagButton}>
                        <Flag big />
                    </TouchableOpacity>
                    <Text style={styles.flagsLeft}>
                        = {props.flagsLeft}
                    </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}> Novo jogo </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignContent: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#000',
        padding: 5,
        justifyContent: 'center'
    },
    buttonLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DDD'
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 20,
    },
})