import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default prop => {
    return (
        <View style={style.FlexV3}>
             <Quadrado  cor='#727' lado={25} />
             <Quadrado  cor='#900' lado={40} />
             <Quadrado  cor='#090' lado={60} />
             <Quadrado  cor='#009' lado={75} />

        </View>
    )
}


const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',    //muda os eixos principais e secundarios e o sentido deles(caso queira)
        justifyContent: 'space-evenly', //eixo principal
        alignItems: 'baseline',           //eixo secundario

        height: 350,
        width: "100%",
        backgroundColor: '#000'

    }
})