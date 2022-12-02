import React from "react"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
}
from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Selecione a dificuldade 
                    </Text>
                    <TouchableOpacity 
                    style={[styles.button, styles.bgEasy]}
                    onPress={() => props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonlabel}> Fácil </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[styles.button, styles.bgNormal]}
                    onPress={() => props.onLevelSelected(0.2)}>
                        <Text style={styles.buttonlabel}> Normal </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[styles.button, styles.bgHard]}
                    onPress={() => props.onLevelSelected(0.3)}>
                        <Text style={styles.buttonlabel}> Difícil </Text>
                    </TouchableOpacity>
                </View>
            </View>                
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#444',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonlabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F2740f'
    },

})