import React, {useState} from 'react'
import {Text, View, StyleSheet, Alert } from 'react-native'
import Botao from './src/Botao'
import Input from './src/Input'



export default () => {

  const [p1, setP1] = useState(null)
  const [p2, setP2] = useState(null)

 // const [media, setMed] = useState(null)

   var valor = 0
  const conta = () => {
    valor = ((parseFloat(p1)+parseFloat(p2))/2)
  //  setMed( valor )  
     
      if (valor > 10 ) {
        valor = (valor/10)
      }
      if (valor >= 9) {
        return (
          Alert.alert(
            "Parabéns, sua mensão é SS", 
            `Satus: Aprovado
Media: ${valor}`
          )
        )
    }else if (valor < 9 && valor >= 7) {
        return (
          Alert.alert(
            "Parabéns, sua mensão é MS",
            `Satus: Aprovado 
Media: ${valor}`
          )
        )
    }else if (valor < 7 && valor >= 5) {
        return (
          Alert.alert(
            "Parabéns, sua mensão é MM",
            `Satus: Aprovado
Media: ${valor}`
          )
        )
    }else if (valor < 5 && valor >= 3) {
        return (
          Alert.alert(
            "Aí é foda né!, infelizment sua mensão é MI",
            `Satus: Reprovado
Media: ${valor}`
          )
        )
    }else if (valor < 3) {
        return (
          Alert.alert(
            "Aí é foda né!, infelizment sua mensão é II",
            `Satus: Reprovado
Media: ${valor}`
          )
        )
    } else {
      return false
    }
  }

 

    return (
      <View style={estilo.fundo} >
        <Text style={estilo.cabecalho} >Calculando a mensão</Text>
        <View style={estilo.tela} >
          
          <View style={estilo.teste} >
            <Input nota={setP1} nome='Prova 1' />
            <Input nota={setP2} nome='Prova 2' />
          </View>
            
            <Botao conta={conta} />
          </View>
      </View>
    )
  } 


const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    alignItems: 'center'    
  },
  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  teste: {
    flexDirection: 'row',
    //alignItems: '',
  },
  cabecalho: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'justify',
    color: 'red'
  },
  template: {
    flexDirection: 'row',
},
})