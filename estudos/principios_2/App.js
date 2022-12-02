import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Contador from './src/componentes/contador/Contador'
import Par_impar from './src/Par_impar'


export default () => {
  return (
    <View style={estilo.fundo} >
      {/* <Text style={estilo.texto} > Aperta os botoes ae meu consagrado </Text>
      <Contador /> */}
      <Par_impar num={2} />
    </View>
  )
}

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    //backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center'
  }
})