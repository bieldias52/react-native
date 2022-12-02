import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'
import Cond from './condicional'

export default ({usuario ={} }) => {
    //const usuario = {} || 0
    return (
        <>
            <Cond teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtg}>
                     Usuarios ativos
                 </Text>
                 <Text style={Estilo.txtg}>
                     {usuario.nome} - {usuario.email}
                 </Text>
 
            </Cond>

        </>
    )
}