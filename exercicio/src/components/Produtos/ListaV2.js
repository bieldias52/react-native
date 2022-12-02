import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'
import Produtos from './produtos'

export default prop => {

    return (
        <>
             <Text style={Estilo.txtg}>
                 Lista de produtos 2.0
             </Text>
             <FlatList 
                data={Produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={({item: p}) => {
                    return <Text> {p.id}) {p.nome} valor R${p.preco} </Text>

                }} 
             />
        </>
    )
}