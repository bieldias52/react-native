import React from "react"
import { View, StyleSheet } from 'react-native'
import Field from "./Field"

export default props =>{
    const rows = props.board.map((row, r) => {
        const columns =row.map((field, c) => {
            return <Field {...field} key={c} 
                onOpen={() => props.onOpenField(r, c)}
                onSelect={e => props.onSelectField(r, c)} />
        })
        return <View key={r}
        style={{flexDirection: 'row'}}>{columns}</View>         // footnote MF.1
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',                                // footnote MF.1
        backgroundColor: '#EEE',
    }
})


// MF.1) Corrigimos o atributo "flexDirection: 'row' " para a região onde estamos contruindo
//       as colunas, pois precisamos apenas que elas, e não as linhas, sofram alteração no
//       seu main axis.
