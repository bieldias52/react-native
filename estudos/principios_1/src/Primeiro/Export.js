/////////////////////// TIPOS DE EXPORT //////////////////

// Temos dois tipos diferentes de export, "export" e "export default".
// Quando usamos o primeiro tipo ("export") estamos exportando a função com o proprio
// nome, ou seja, se a chamamos de função1 só poderemos fazer o import dela com o nome
// função1. Quando usamos o segundo formato ("export default") podemos chamar a função
// com qualquer nome desejado.


import React from 'react'
import { Text } from 'react-native'
import styles from './Estilos'

function Exemplo1() {
    return(
        <Text>
            Testando exemplo 1
        </Text>
    )
}

export { Exemplo1 }


export default props => {
    return (
        <Text style={styles.textoSub}>
            Estudando novamente e realmente aprendendo {props.t1} a forma de fazer as coisas
        </Text>
    )    
}

// Podemos ainda usar uma arrow function para resumir o código

const Arrowfunction = () =>  <Text style={styles.texto2} >Arrow function </Text>

export {Arrowfunction}


// Podemos exportar a função de qualquer forma que escolhermos, fica a critério do
// do programador decidir qual sera a melhor forma 