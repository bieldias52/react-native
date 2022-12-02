import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.txtg, style.Num]} >
                {num}
            </Text>
        </View>
    )
}


const style = StyleSheet.create ({
    Container: {
        backgroundColor: '#000',
        width: 40,
        heigth: 40,
        margin: 5,
        borderRadius: 20,

    },
    Num: {
        color: '#FFF'
    }



})