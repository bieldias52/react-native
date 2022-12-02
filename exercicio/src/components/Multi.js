import React from "react"
import { Text } from "react-native"
import Estilom from './estilo'

export default function Comp() {
    return <Text style={Estilom.txtg}>Comp oficial</Text>
}

function Comp1() {
    return <Text style={Estilom.txtg}>Comp 01</Text>
}

function Comp2() {
    return <Text style={Estilom.txtg}>Comp 02</Text>
}

export {Comp1, Comp2} 