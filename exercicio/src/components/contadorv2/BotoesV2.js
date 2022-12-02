import React, {Fragment} from 'react'
import { Button, Text} from 'react-native'
import Estilo from '../estilo'

export default prop => {
    return (
        <>
            <Button title='Cima' onPress={prop.soma}/>
            <Button title='Baixo'onPress={prop.sub}/>
        </>
    )
}