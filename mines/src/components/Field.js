import React from "react"
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import params from "../param"
import Mine from "./Mine"
import Flag from "./Flag"

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props          // Destructuring do 'App.js'

    const styleField = [styles.field]
    

    if (opened) styleField.push(styles.opened)                    // Estilos de cada quadrado do jogo
    if (exploded) styleField.push(styles.exploded)  
    if (flagged) styleField.push(styles.flagged)
    if (!opened && !exploded) styleField.push(styles.regular)  

    let cor = null                                      // vamos examinar a quantidade
    if (nearMines > 0) {                                // de minas proximas 
        if ( nearMines == 1 ) cor = '#2A28D7'
        if ( nearMines == 2 ) cor = '#2B520F'
        if ( nearMines > 2 && nearMines < 6 ) cor = '#F9060A'
        if ( nearMines >= 6 ) cor = '#F221A9'
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen}
        onLongPress={props.onSelect}>
        <View style={styleField}> 
            { !mined && opened && nearMines > 0 ?               // footnote F.1
                <Text style={[ styles.label, {color: cor}]}>
                    {nearMines}</Text> : false}         
            { mined && opened ? <Mine /> : false }    
            { flagged && !opened ? <Flag /> : false }       
        </View>
        </TouchableWithoutFeedback>
    )

}

const styles = StyleSheet.create({         // footnote F.2
    field: {
        height: params.blocksize,     //o tamanho do bloco independe do estado
        width: params.blocksize,
        borderWidth: params.borderSize,
        //color: '#f0f0f0',
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened : {
        backgroundColor: '#999',
        borderColor: '#777',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: '#F00',
        borderColor: '#F00',

    }
})






// F.1.1) Precisamos definir a condição para exibiçao do texto, não faz sentido exibir
//    o número de minas se o field ta fechado ou se ja temos uma mina nele.
//
// F.1.2) Assim como definimos a condição de exibição do texto, precisamos definir a condiçao
//    de exibição da mina.
//
// F.1.3) Condições de contorno para aplicar a bandeira 
//
// F.2) Como definimos o estilo do campo como um array podemos adicionar outros
//    estilos como parte dele, então definimos primeiro um estilo geral para o
//    bloco e dps vamos definir qual o estilo específico (regular, explodido, ...).