////////////////// PRIMEIRO COMPONENTE, BÁSICO 1 ///////////////////


// Começando do princípio temos oq será necessario para fazer nosso código, ou seja,
// nossos imports. Se vamos usar algum coponente JSX precisamos importar o React, pois 
// ele quem nos permite usar esses componentes. JSX é uma forma de criar elementos para
// serem utilizados em aplicações, é bem similar ao código HTML.

// Após fazer o import do React podemos usar JSX. Em seguida temos que importar quais 
// elementos serão usados, nesse caso vamos apenas imprimir uma mensagem na tela, então
// precisamos apenas do componente <Text>, o qual é importado do react-native.

// No caso do <Text>, como estamos importando apenas um componente específico temos 
// que usar "{}".

// Para se ter acesso ao código presisamos sempre exporta-lo, independete se é em outro
// código ou em um aplicativo.

// Para expotar algo trmos duas formas, " export default " e " export ".

import React from 'react'
import { Text, View } from 'react-native'

import Exemplo2 from './Export'                                       // export default
import { Exemplo1, Arrowfunction } from './Export'                   // export

import Qualquercoisa, { declarada, vazia, arrow, constante } from './Funcoes' //export default & export

import styles  from './Estilos'


// Podemos ainda trabalhar usando o jsx como um constante, por exemplo

const jsx = <Text style={styles.textoCentral}>Cabeçalho</Text>

export default () => {
  return (
    <View style={styles.container} >
      {jsx}
      <Text estilo = 'styles.texto2' > Aooooba </Text>
      <Exemplo2 t1={32} />
      <Exemplo1 />
      <Arrowfunction /> 
    </View>
  )
}

// Quando temos mais de um JSX para exportar, precisamos usar ou o componente <View> ou 
// o componente <Fragment>, porém o component <Fragment> pode ser substituido pelo 
// seguinte par " <>(...)</> "