import React, { Fragment } from "react";
import { Text, View, StyleSheet } from 'react-native'


import Basico1 from "./src/Primeiro/Basico1";
import Random from "./src/Segundo/Random";
import Button from "./src/Segundo/Botao";


// export default () => <Basico1/>

export default () => {
  return (
    <View style={estilo.fundo} >
      <Text style={estilo.texto} > 
          Vamos ao Game 
      </Text>
      <Button />
    </View>
  )
}




const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 50,
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: '#FFF',
  } 
})





