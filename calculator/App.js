import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    setState,
    useColorScheme,
    View,
  } from 'react-native';

import { Component } from "react/cjs/react.production.min"
import Button from './src/componentes/Button'
import Display from './src/componentes/Display'


const initialState = {
    displayValue: '0',
    clearDisplay: true,              // diz se o display precisa ser limpo ao não
    operation: null,
    values: [0,0],
    atual: 0,
}


  export default class App extends Component{
        state = { ...initialState }      // É como se fosse um clone daquele objeto

        digito = n => {
            
            
            const clearDisplay = this.state.displayValue === '0'       // Substituindo o valor 0 inicial
            || this.state.clearDisplay
            
            if (n === '.' && this.state.clearDisplay) {
                n = '0.'
            }
            if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {   // Primeira validação
              return
            }

            const currentValue = clearDisplay ? '' : this.state.displayValue // o valor corrente é extamente oq esta no display
            const displayValue = (currentValue + n) //.replace(".", ",")            // juntando os valores, pois são strings
            this.setState({ displayValue, clearDisplay: false })

            // if ( displayValue === '.') {             // Tentando deixar bonito
            //     return  displayValue = '0.'
            // }

            if (n !== '.') {
                const newValue = parseFloat(displayValue)
                const values = [...this.state.values]      // estou criando um clone do array values
                //const correcao = ponto => ponto = newValue.replace(",", ".")  // mudando de ',' para '.'
                //values[this.state.atual] = correcao 
                values[this.state.atual] = newValue
                this.setState({ values })                // implementando os novos valores no estado
            }
        }

        clear = () => {
            this.setState({ ...initialState})
        }

        inverso = () => {
            const values = [...this.state.values]
            values[0] = (-1) * values[0]
            this.setState({
                displayValue: values[0],
                values
            })            
        }

        setOperation = operation => {
            if (this.state.atual === 0) {
            this.setState({ operation, atual: 1, clearDisplay: true})
        } else {
            const equal = operation === '='
            const values = [...this.state.values]
            if (this.state.operation === '-1') {
                                
            }
            else{
                try {
                values[0] = eval( `${values[0]} ${this.state.operation} ${values[1]}` )  // footnote 1
                } catch(equal) {
                values[0] = this.state.values[0]
            }
            }
            
            

            values[1] = 0
            this.setState({
                displayValue: values[0],//.replace(".", ","),
                operation: equal ? null : operation,
                atual: equal ? 0 : 1, 
                //clearDisplay: !equal,
                clearDisplay: true,
                values,
            })
        }
        }
       
      render() {
          return (
              <View style={styles.container}>
                  <Display value={this.state.displayValue}/>
                  <View style={styles.buttons}>
                      <Button label='AC' ac onClick={ this.clear } />
                      <Button label='+/-' specialOperation onClick={ () => this.inverso('-1') } />
                      <Button label='%' specialOperation onClick={ () => this.setOperation('*1/100*') } />
                      <Button label='÷' operation onClick={ () => this.setOperation('/') } />
                      <Button label='7' onClick={ this.digito } />
                      <Button label='8' onClick={ this.digito } />
                      <Button label='9' onClick={ this.digito } />
                      <Button label='×' operation onClick={ () => this.setOperation('*') } />
                      <Button label='4' onClick={ this.digito } />
                      <Button label='5' onClick={ this.digito } />
                      <Button label='6' onClick={ this.digito } />
                      <Button label='-' operation onClick={ this.setOperation } />
                      <Button label='1' onClick={ this.digito } />
                      <Button label='2' onClick={ this.digito } />
                      <Button label='3' onClick={ this.digito } />
                      <Button label='+' operation onClick={ this.setOperation } />
                      <Button label='0' double onClick={ this.digito } />
                      <Button label=',' onClick={ () => this.digito('.') } />
                      <Button label='=' operation onClick={ this.setOperation } />
                  </View>      
              </View>
          )
      }
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,                   // Crescimento
        //backgroundColor: '#000'
    },
    buttons: {
        backgroundColor: '#000',
        flexDirection: 'row',     // Muda o eixo 
        flexWrap: 'wrap',         // Permite a quebra de linha
    }
  })


  // 1) vamos avaliar a opereção, entao precisamos passar todos os parametros,
  // o valor 0 o valor 1 e no meio a operaçao desejada, os valores são interpolados.
  // Para isso pegamos o valor numérico e o transformamos em string, assim 
  // podemos usar o aval().