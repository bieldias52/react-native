import React from "react";
import { View, Button, Modal, StyleSheet} from 'react-native'


const ButtonCalcular = ({conta}) => {
    return (
        <View style={estilo.calcular} >
            <Button color='#3EBD5A' title='Calcular' onPress={conta} />
        </View>
    )
}


const ButtonInst = ({aperta}) => {
    return (
        <View >
            <Button color='#293237' title='Instruções' onPress={aperta} /> 
        </View>
    )
}

const ButtonInfo = ({aperta})  => {
    return (
        // <Modal onRequestClose={props.cancel} visible={props.visible}
        //     animationType='none' transparent={true}  >
            <View >
                <Button title='Mais informaçoes' onPress={aperta} />
            </View>
        // </Modal>
    )
}

export { ButtonCalcular, ButtonInst, ButtonInfo}

const estilo = StyleSheet.create({
    calcular: {
        width: 200,
        height: 60,
    },
    info: {
        width: 200,
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        bottom: -390,
        left: 80,

        
    },

})