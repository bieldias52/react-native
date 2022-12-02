import React from "react";
import { Text, View, StyleSheet } from 'react-native'

export default props => {
    
    return (
        <View style={estilo.display} >
            <Text style={estilo.texto} > Contagem: {props.numero}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    display: {
       padding: 10,
    },
    texto: {
        color: '#fff',
        fontSize: 30
    },
})