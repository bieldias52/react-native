import React from 'react'
import { Text, View, StyleSheet, Modal} from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.cancel} visible={props.visible} 
            animationType='fade' transparent={true}>
                <View style={estilo.tela}>
                    
                    <Text style={estilo.textoHead}> Bem vindo!!!</Text>

                    <View style={estilo.container} >
                        <Text style={estilo.texto}>
                            1- Para fazer o calculo de sua mensao apenas insira as notas nos campos disponíveis e seus respectivos pesos.
                        </Text>
                        <Text style={estilo.texto}>
                            2- Preencha os campos com as notas obtidas, se algum dos campos não for necessario para seu caso deixe-o em branco.
                        </Text>
                        <Text style={estilo.texto}>
                            3- Caso nao saiba os pesos, deixe em branco que todas as notas serão consideradas com mesmo peso dentro da media final.
                        </Text>
                    </View>
                
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
    container: {
        flex: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#D6D8DF',
        
    },
    textoHead: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 115,
    },
    texto: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',

    },
    obs: {
        fontSize: 12,
        fontStyle: 'italic',
        textAlign: 'left',
    },
})