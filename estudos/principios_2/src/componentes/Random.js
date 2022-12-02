import React from "react"
import { Text } from 'react-native'
//import Estilos from "../Primeiro/Estilos"

export default props => {
    const { max, min } = props      // usando destruturing 
    const aleatorio = parseInt((Math.random()) * (max - min) + min) 
    
    return (
        <Text>
            O numero gerado entre {max} e {min} foi {aleatorio}
        </Text>
    ),
    console.warn('Qual foi 2')
}



///////////////////////////// explicando o codigo //////////////////////////////

// Primeiro fizemos os imports necessarios para a contruÃ§Ã£o do programa
// Em seguida exportamos o codigo como padrÃ£o, ou seja, exportamos o cÃ³digo de uma forma 
// na qual ele pode ser importado com qualquer nome que se deseja.
// Foi usada uma arrow function na forma nomeada como props e o atributo destructuring.
// O atributo destructuring nos permite extrair informaÃ§Ãµes direto de um local, sendo ele 
// um array, funÃ§Ã£o, import etc... Ã‰ muito Ãºtil para deixar o cÃ³digo mais limpo.
// A constante foi criada para armazenar o valor calculado e dps exibi-lo em forma de texto
// usamos o comando " parsInt " para tranformar o nÃºmero decimal em um inteiro.