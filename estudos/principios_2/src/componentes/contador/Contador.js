import React,{ useState } from "react";
import { Button, Text } from "react-native";


export default () => {

    const [n, setNumero] = useState(0)

    const mais = () => {setNumero(n + 1), console.warn(n)}
    const menos = () => setNumero(n - 1)

    return (
        <>
        <Button title='Mais' onPress={mais} />
        <Text>{n}</Text>
        <Button title='Mais' onPress={menos} />
        </>
    )
}