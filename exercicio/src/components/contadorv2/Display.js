import React, {Fragment} from 'react'
import { View, Text, StyleSheet, ImageBackgroundBase} from 'react-native'
import Estilo from '../estilo'
//import Contadorv2 from './Contadorv2'

export default prop => {
    return (
        <View style={style.Display} >
            <Text style={[style.DisplayText, Estilo.txtg] } >
                {prop.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: '#FFF'
    },
})

