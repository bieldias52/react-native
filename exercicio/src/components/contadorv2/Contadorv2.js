import React, { useState } from 'react'
import { View, Text} from 'react-native'
import Estilo from '../estilo'
import Display from './Display'
import BotoesV2 from './BotoesV2'

export default prop => {
    const [num, setNum] = useState(0)

    const soma = () => setNum(num + 1)
    const sub = () => setNum(num - 1)

    return (
        <View>
            <Text style={Estilo.txtg}>
                 ContadorV2
            </Text>
            <Display num={num}/>
            <BotoesV2 soma={soma} sub={sub}/>
        </View>
    )
}