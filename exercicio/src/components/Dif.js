import React from 'react'
import { Text, Platform } from 'react-native'
import Estilo from './estilo'

export default prop => {
    if (Platform.os = 'android'){
        return <Text style={Estilo.txtg}>Android</Text>
    } else if (Platform.os = 'ios'){        
        return <Text style={Estilo.txtg}>IOS</Text>
    } else {
        return <Text style={Estilo.txtg}>ih, qual foi mané</Text>
    }
}