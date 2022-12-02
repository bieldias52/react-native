import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

//import Dif from './components/Dif'
//import Aleat from './components/Aleatorio'
//import CompOficial, { Comp1, Comp2 } from './components/Multi'
//import Primeiro from './components/Primeiro'
//import MinMax from './components/MinMax'
//import Titulo from './components/Titulo'
//import Botao1 from './components/Botao' 
//import Botao2 from './components/Contador' 
//import Contadorv2 from "./components/contadorv2/Contadorv2"
//import Diferenciar from "./components/Dif"
//import Parimpar from './components/Parimpar'
//import Familia from './components/familia/Familia'
//import Membros from './components/familia/Membros'
//import Usuario from './components/Usuario'
//import Lista from './components/Produtos/Lista'
//import ListaV2 from './components/Produtos/ListaV2'
//import Digite from './components/Digite'
//import FlexV1 from './components/layout/FlexV1'
//import FlexV2 from './components/layout/FlexV2'
//import FlexV3 from './components/layout/FlexV3'
//import FlexV4 from './components/layout/FlexV4'
import Mega from './components/mega/Mega'


export default () => (
    <SafeAreaView style={style.App}>
        <Mega qnum={10} />

        {/*<Titulo t1 = 'Bem vindo' t2 = 'Faça seu cadastro'/>
        <FlexV4 />
        <FlexV3 />
        <FlexV2 />
        <FlexV1 />
        <Digite />
        <ListaV2 /> 
        <Lista />
        <Usuario usuario={{ nome: 'Eu', email: 'eu@gmail.com'}} />
        <Usuario usuario={{ nome: '', email: 'eu@gmail.com'}} />
        <Usuario usuario={{ nome: 'Eu', email: ''}} />
        <Usuario usuario={{ nome: '', email: ''}} />
        <Familia>
            <Membros nome="Artur" sobrenome="Lange"/>
            <Membros nome="Felipe" sobrenome="Lange"/>
        </Familia>
        <Familia>
            <Text>de 4 patas</Text>
            <Membros nome="Amora" sobrenome="Lange"/>
            <Membros nome="Kit" sobrenome="Lange"/>
            <Membros nome="Mel" sobrenome="Lange"/>
        </Familia>
        <Parimpar num={4} />
        <Diferenciar />
        <Contadorv2 />
        <Botao2 inicial={0} passo={5} />
        <Aleat min={1} max={60} />
        <CompOficial />
        <MinMax min={5} max={7}/>
        <MinMax min={4} max={57}/>
        <Comp1 />
        <Comp2 />
        <Primeiro/>*/}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '',
        flex: 1,
        justifyContent: 'center',   //eixo principal
        alignItems: 'center',       //eixo secundario
        padding: 20
    }

})

