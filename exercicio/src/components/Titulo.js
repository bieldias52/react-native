import React, {Fragment}from "react"
import { View, Text} from 'react-native'
import Estilo from './estilo'

export default prop => (
    <Fragment>
        <Text style={Estilo.txtg}>{prop.t1}</Text>
        <Text>{prop.t2}</Text>
     </Fragment>
)