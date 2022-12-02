import React from "react";
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 45,
        //fontStyle: 'normal',
        height: (Dimensions.get('window').width/4),// - 10 ,
        width: (Dimensions.get('window'). width/4),// - 10 ,
        padding: 20,
        borderRadius: 60,
        color: '#fff',
        backgroundColor: '#3D3D3D',
        textAlign: 'center',
        borderWidth: 5,
        borderColor: '#000',
        //justifyContent: "space-between",
    },
    operationButton: {
        color: '#fff',
        //backgroundColor: '#fa8231',
        backgroundColor: '#FE9D35',
    },
    doubleButton: {
        width: ((Dimensions.get('window').width /4) * 2),
    },
    tripleButton: {
        //fontStyle: 'italic',
        color: '#000',
        backgroundColor: '#BFBFBF',
        width: (Dimensions.get('window').width /4) * 3
    },
    ACButton: {
        //fontStyle: 'italic',
        color: '#000',
        backgroundColor: '#BFBFBF',
        width: (Dimensions.get('window').width /4) 
    },
    SpecialButton: {
        fontStyle: 'italic',
        color: '#000',
        backgroundColor: '#BFBFBF',
        width: (Dimensions.get('window').width /4) 
    },
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.doubleButton)  // o push vai 'pegar' e aplicar o componente entre () 
    if (props.triple) stylesButton.push(styles.tripleButton)  // caso a devolutiva do "if" seja true
    if (props.operation) stylesButton.push(styles.operationButton) 
    if (props.ac) stylesButton.push(styles.ACButton) 
    if (props.specialOperation) stylesButton.push(styles.SpecialButton)
    return (
        <TouchableHighlight onPress={ () => props.onClick(props.label)}>
            <Text style={stylesButton}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}