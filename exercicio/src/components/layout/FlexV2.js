import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default prop => {
    return (
        <View style={style.FlexV2}>
             <Quadrado  cor='#727'/>
             <Quadrado  cor='#900'/>
             <Quadrado  cor='#090'/>
             <Quadrado  cor='#009'/>

        </View>
    )
}


const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: "100%",
        justifyContent: "space-between",    //eixo principal
        alignItems: 'center',   //eixo secundario
        backgroundColor: '#000'

    }
})