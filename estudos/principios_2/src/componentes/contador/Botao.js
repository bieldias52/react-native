import React from "react";
import { Button, Text } from "react-native";
import Random from "../Random";

export default props => {

    const teste = props => {
        //const { max, min } = props      // usando destruturing 
        const max = 32
        const min = 6
        const aleatorio = parseInt((Math.random()) * (max - min) + min) 
        
        return (
            <Text>
                O numero gerado entre {max} e {min} foi {aleatorio}
            </Text>
        )

    }
        
    //     return (
    //     <Random max={32} min={6} />
        
    //     ),
    //     console.warn('qual foi')
    // }

    return (
        <Button title={props.titulo}
        onPress={teste} 
        />
    )
} 