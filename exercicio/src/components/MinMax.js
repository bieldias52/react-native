import React from "react";
import { Text } from 'react-native'
import Estilo from "./estilo";

export default prop => (
        <Text style={Estilo.txtg}>
            Sabemos que {prop.max} é maior que {prop.min}, testando a  do texto
        </Text> 
)