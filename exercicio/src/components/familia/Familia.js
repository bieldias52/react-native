import React from 'react'
import {Text} from 'react-native'
//import Membros from './Membros'

export default prop => {
    return (
        <>
            <Text>Minha familia</Text>
           {prop.children}      
        </>
            
    )
}