import React, { Component } from "react";
import { Text, TextInput, Button, View} from "react-native"
import Estilo from '../estilo'
import Mostrador from "./Mostrador";

export default class Mega extends Component{

    state= {
        qnum: this.props.qnum,
        numeros: []
    }

    newqnum = (qtde) => {
        this.setState({qnum: +qtde})
    }

    ineditos = nums => {
          const novo = parseInt(Math.random() * 60) 
          return nums.includes(novo) ? this.ineditos(nums) : novo
    }

    // Essa é uma maneira de gerar os números
    // udando .reduce
    gerador = () => {
        const numeros = Array(this.state.qnum).fill()
            .reduce(n => [...n, this.ineditos(n)], [] ) 
            .sort((a,b) => a - b)
        this.setState({ numeros })
    }

    // Outra maneira de gerar os números 
    // usando laço de de repetição
    //gerador = () => {
    //    const { qnum } = this.state
    //    const numeros = []
    //    for (let i=0; i < qnum; i++) {
    //        numeros.push(this.ineditos(numeros))
    //    }
    //    numeros.sort((a,b) => a - b)
    //   this.setState({ numeros })
    //}

    exibirnum = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Mostrador key={num}  num = {num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtg} >
                    Mega-sena
                 </Text>
                 <TextInput 
                 style = {{borderBottomWidth: 1}}
                 keyboardType={'numeric'}
                 placeholder="Quantos números voce quer?" 
                 value={`${this.state.qnum}`}
                 onChangeText={this.newqnum}
                 />
                    
                 <Button
                    title="Gerar"
                    onPress={this.gerador}
                 />   
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                    
                }}>
                    {this.exibirnum()}
                </View>

                <Text>
                    {this.state.numeros.join(',')}
                </Text>
                
                 
            </>
        )
    }
}