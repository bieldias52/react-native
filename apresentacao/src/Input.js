import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet} from 'react-native'


export default props => {
    
    const { nota, nome, peso } = props

    return (
        <View style={estilo.template} >
            <TextInput style={estilo.texto}
                placeholder = {nome}
                value= {null}
                onChangeText={nota}
                keyboardType = 'numeric'
                maxLength={4}
            />
             <TextInput style={estilo.peso}
                placeholder = 'Peso'
                value= {null}
                onChangeText={ peso }
                keyboardType = 'number-pad' 
                maxLength={3}
            /> 
        </View>
    )
}

const estilo = StyleSheet.create({
    template: {
        alignItems: 'center',
        textAlign: 'center',
        
        //borderBottomWidth: StyleSheet.hairlineWidth
    },
    texto: {
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 120,
    //    borderWidth: 1,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    peso: {
        textAlign: 'center',

    },
})
