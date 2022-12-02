import React from "react";
import { Button } from "react-native";
import Random from "./Random";

export default () => {

    function exec() {
        <Random max={32} min={6} />
    }

    return (
        <Button title="Aperta ae chefe"
        onPress={{exec}} 
        />
    )
} 