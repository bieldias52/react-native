import React from 'react'
import { Button, StyleSheet, View } from 'react-native'



export default props => {
    return (
        <View style={estilo.fundo} >
            <Button title='Menos' onPress={props.menos}  />
            <Button  title='Mais' onPress={props.mais} />
        </View>
    )
}

const estilo = StyleSheet.create({
    fundo:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 20
    },

})