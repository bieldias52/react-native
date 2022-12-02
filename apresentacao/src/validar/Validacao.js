import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default props =>{
    const { media } = props 
    if (media > 10 ) {
        media = (media/10)
      }
      if (media >= 9) {
          return (
              <View style={estilo.container} >
                <View>
                    <Text style={estilo.comentario}>Krl meu parceiro, tu é brabo!!</Text>
                </View>
                <Text style={estilo.texto}>Mensao: SS </Text>
                <Text style={estilo.texto}>Média: {media} </Text>
                <Text style={estilo.texto}>Situação: Aprovado </Text>
              </View>
          )        
      }if (media < 9 && media >= 7) {
        return (
            <View style={estilo.container} >
                <View>
                    <Text style={estilo.comentario}>Boa porra, deu bom!</Text>
                </View>
                <Text style={estilo.texto}>Mensao: MS </Text>
                <Text style={estilo.texto}>Média: {media} </Text>
                <Text style={estilo.texto}>Situação: Aprovado </Text>
            </View>
        )
      } if (media < 7 && media >= 5) {
        return (
            <View style={estilo.container} >
                <View>
                    <Text style={estilo.comentario}>Fez o teu.</Text>
                </View>
                <Text style={estilo.texto}>Mensao: MM </Text>
                <Text style={estilo.texto}>Média: {media} </Text>
                <Text style={estilo.texto}>Situação: Aprovado </Text>
            </View>
        )
      } if (media < 5 && media >= 3) {
        return (
            <View style={estilo.container} >
                <View>
                    <Text style={estilo.comentario}>Semestre que vem tamo nós de novo.</Text>
                </View>
                <Text style={estilo.texto}>Mensao: MI </Text>
                <Text style={estilo.texto}>Média: {media} </Text>
                <Text style={estilo.texto}>Situação: Reprovado </Text>
            </View>
        )
      } if (media < 3) {
        return (
            <View style={estilo.container} >
                <View>
                    <Text style={estilo.comentario}>Porra mano, nem 3 é sacanagem...</Text>
                </View>
                <Text style={estilo.texto}>Mensao: II </Text>
                <Text style={estilo.texto}>Média: {media} </Text>
                <Text style={estilo.texto}>Situação: Reprovado com força</Text>
            </View>
        )
      } 
}


const estilo = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    texto: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    },
    comentario: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 30,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
})