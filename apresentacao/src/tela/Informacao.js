import React from "react"
import { Text, View, Modal, StyleSheet} from 'react-native'
import Validacao from "../validar/Validacao"


export default props => {
    return (
        <Modal onRequestClose={props.cancel} visible={props.visible} 
            animationType='slide' transparent={true}>
            <View style={estilo.tela}>
                {/* <Text> Informaçoes </Text> */}

                <Validacao media={props.media} />

            </View>
        </Modal>
    )
}

const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#D6D8DF',
    },
})
