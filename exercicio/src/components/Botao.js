import React from "react"
import { Button } from "react-native"

export default prop => {

    function warning() {
        console.warn("ih, qual foi mané")
    }

    return (
        <Button
            title= "aperta ae"
            onPress={warning}
        />
    )
}