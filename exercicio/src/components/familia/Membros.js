import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default prop => {
    return (
        <Text style={Estilo.txtg}>
            {prop.nome} {prop.sobrenome}
        </Text>
            
    )
}