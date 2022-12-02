import React, {useState} from "react"
import { Button, View, Text } from "react-native"
import Estilo from './estilo'




export default prop => {
    //let i = prop.inicial
    const [i,contador] = useState(prop.inicial)
    function up() {
        contador(i + 1*prop.passo)
    }
    function donw() {
        contador(i - 1*prop.passo)
    }

    return (
        <>
        <Text style={Estilo.txtg} >{i}</Text>
        <Button 
            title="Cima"
            onPress={up} 
        />
        <Button 
            title="Baixo"
            onPress={donw} 
        />
        </>
    )



}