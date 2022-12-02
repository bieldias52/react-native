import React from "react"
import { View, StyleSheet } from 'react-native'

export default props => {
    return ( //tem um problema de otimização aqui no exercicio, vou corrigir quando terminar
        <View style={styles.container}>
            <View style={[styles.pole, props.big ? styles.pBig : null]} />
            <View style={[styles.flag, props.big ? styles.fBig : null]} />
            <View style={[styles.base1, props.big ? styles.b1Big : null]} />
            <View style={[styles.base2, props.big ? styles.b2Big : null]} />
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: 3,
    },
    pole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 7,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 11,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    },
    pBig: {
        height: 28,
        width: 4, 
        marginLeft: 16,
    },
    fBig: {
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    b1Big: {
        height: 4,
        width: 12,
        marginLeft: 12,
        marginTop: 20,
    },
    b2Big: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24,
    }
})