import React from "react";
import { Text } from 'react-native'
import Estilo from "./estilo";

export default prop => {
    const {min, max} = prop
    const delta = ( max - min ) + 1
    const numero = parseInt(Math.random() * delta) + min 
    return (
        <Text style={Estilo.txtg}>
            O valor obtido entre {min} e {max} foi de {numero}
        </Text> 
    )
}