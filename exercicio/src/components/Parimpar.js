import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default ({num=0}) => {
    return (
        <View>
            <Text style={Estilo.txtg}>O número fornecido é </Text>
            {num % 2 === 0
                ? <Text style={Estilo.txtg}>Par</Text>
                : <Text style={Estilo.txtg}>Ímpar</Text>
            }
        </View>
    )
}