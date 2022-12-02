import React from 'react'
import { Text, View } from 'react-native'

export default ({num = 0 }) => {
        return (
            <View>
                {(num % 2 === 0)
                    ? <Text> Par </Text>
                    : false
                }
            </View>
        )         
}
