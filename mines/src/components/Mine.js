import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => { // footnote M.1
    return (
        <View style={styles.container}>                 
            <View style={styles.coreMine} />
            <View style={styles.lineMine} />
            <View style={[styles.lineMine, { transform: [{ rotate: '45deg' }]}]} />  
            <View style={[styles.lineMine, { transform: [{ rotate: '90deg' }]}]} />  
            <View style={[styles.lineMine, { transform: [{ rotate: '135deg' }]}]} />  
        </View>
    )
}


const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineMine: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black',
    }
})


// M.1) Nesse caso estamos pensando na mina com um estilo composto por uma bola central e
//      quatro linhas cortando ela simetricamente, para definir a linha no eixo correto ao
//      invés de criar novos estilos apenas usamos a propriedade de rotação para adequar 
//      as linhas na forma desejada. 