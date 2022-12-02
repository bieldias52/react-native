import React from 'react'
import { StyleSheet, View } from 'react-native'

export default prop => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}


const style = StyleSheet.create({
    FlexV4: {
        width: "100%",
        height: '40%',
        backgroundColor: '#000',
        //borderStyle: "",
        borderColor: '#900',

    },
    V0: {
        backgroundColor: '#900',
        flexGrow: 5,
    },
    V1: {
        backgroundColor: '#FFF',
        flexGrow: 3,

    },
    V2: {
        backgroundColor: '#090',
        flexGrow: 5,

    }
})