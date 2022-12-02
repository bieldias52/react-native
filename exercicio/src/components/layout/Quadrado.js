import React from 'react'
import { StyleSheet, View } from 'react-native'


export default prop => {
    
    return (
        <View style={{
            height: prop.lado,
            width: prop.lado,
            backgroundColor: prop.cor || '#000'


        }}
        
        
        />

    )
}