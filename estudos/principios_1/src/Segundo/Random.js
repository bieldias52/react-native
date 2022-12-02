import React from "react"
import { Text } from 'react-native'
import Estilos from "../Primeiro/Estilos"

export default props => {
    const { max, min } = props      // usando destruturing 
    const aleatorio = parseInt((Math.random()) * (max - min) + min) 
    
    return (
        <Text style={Estilos.textoSub} >
            O numero gerado entre {max} e {min} foi {aleatorio}
        </Text>
    )
}



///////////////////////////// explicando o código //////////////////////////////

// Primeiro fizemos os imports necessarios para a contrução do programa
// Em seguida exportamos o codigo como padrão, ou seja, exportamos o código de uma forma 
// na qual ele pode ser importado com qualquer nome que se deseja.
// Foi usada uma arrow function na forma nomeada como props e o atributo destructuring.
// O atributo destructuring nos permite extrair informações direto de um local, sendo ele 
// um array, função, import etc... É muito útil para deixar o código mais limpo.
// A constante foi criada para armazenar o valor calculado e dps exibi-lo em forma de texto
// usamos o comando " parsInt " para tranformar o número decimal em um inteiro.