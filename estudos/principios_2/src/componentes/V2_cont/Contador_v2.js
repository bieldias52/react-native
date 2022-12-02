import React, { useState } from "react";
import { StyleSheet } from 'react-native'
import Botao from './Botoes'
import Display from './Display'


export default props => {

    const [num, setNum] = useState(0)

    const mais = () => setNum(num + 1)
    const menos = () =>  setNum(num - 1)

    return (
        <>
        <Display numero={num} />
        <Botao mais={mais} menos={menos} style={estilo.botao} />
        </>
    )
}

const estilo = StyleSheet.create({
    fundo:{
        flexDirection: 'row',
    },
    botao: {
        backgroundColor: '#fff',
        
    }
})