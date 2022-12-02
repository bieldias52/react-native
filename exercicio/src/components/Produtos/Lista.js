import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'
import Produtos from './produtos'

export default prop => {
    function lista() {
        return Produtos.map(p => {
            return (
                 <Text key={p.id}>
                    {p.id}) {p.nome} valor R${p.preco}

                 </Text>
            )

        }
            
            )
    }
    return (
        <>
         <Text style={Estilo.txtg}>
            Lista de produtos 
         </Text>
         {lista()}
        </>
    )
}