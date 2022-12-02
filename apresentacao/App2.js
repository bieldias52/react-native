import React, {Component} from 'react'
import {Text, View, StyleSheet, Alert } from 'react-native'
import { ButtonCalcular, ButtonInst, ButtonInfo } from './src/Botao'
import Input from './src/Input'
import Instrucao from './src/tela/Instrucao'
import Informacao from './src/tela/Informacao'


//import Alertas from './src/Alertas'



const initialState = {
    notas: [],
    pesos: [1,1,1],
    media: null,
    showInstructions: false,
    showInfos: false,
}


export default class App extends Component {

    state = {...initialState}
    

    primeiraNota = (value1 = null) => {
        const notas = [...this.state.notas]
        {(value1 != '') ? notas[0] = parseFloat(value1)  : notas[0] = null /*notas.splice(0,1)*/ } 
        this.setState({ notas }) 
    }
    
    segundaNota = (value2 = null) => {
      const notas = [...this.state.notas]
      {(value2 != '') ? notas[1] = parseFloat(value2)  : notas[1] = null/*notas.splice(1,1)*/  }
      
      this.setState({ notas }) 
    }
    
    terceiraNota = (value3 = null) => {
      const notas = [...this.state.notas]
      {(value3 != '') ? notas[2] = parseFloat(value3)  : notas[2] = null /*notas.splice(2,1)*/  }
      
      this.setState({ notas }) 
    }
    
    primeiroPeso = (peso1 ) => {
      const pesos = [...this.state.pesos]
      {(peso1 != '') ? pesos.splice(0,1,parseFloat(peso1))  : pesos[0] = 1  } 
      {(peso1 < 1 ) ? peso1 = parseFloat(peso1)*10 : false } 
      this.setState({ pesos })
    }

    segundoPeso = (peso2 ) => {
      const pesos = [...this.state.pesos]
      {(peso2 != '') ? pesos.splice(1,1,parseFloat(peso2))  : pesos[1] = 1  } 
      {(peso2 < 1 ) ? peso2 = parseFloat(peso2)*10 : false } 
      this.setState({ pesos })
    }

    terceiroPeso = (peso3 ) => {
      const pesos = [...this.state.pesos]
      {(peso3 != '') ? pesos.splice(2,1,parseFloat(peso3))  : pesos[2] = 1 } 
      {(peso3 < 1 ) ? peso3 = parseFloat(peso3)*10 : false } 
      this.setState({ pesos })
    }


    conta = () => {
        let media = parseFloat({...this.state.media}) 
        let soma = 0
        let peso = 0

        for (let i = 0; i < this.state.notas.length; i++ ) {
          if (this.state.notas[i] != null) {
            soma += parseFloat(this.state.notas[i]) * parseFloat(this.state.pesos[i])
            peso += parseFloat(this.state.pesos[i])
          }
        }
        
        media = (soma/peso).toFixed(2)

        {(media > 10 ) ? media = (parseFloat(media)/10).toFixed(2) : false }

        this.setState({ media })
     }

     reset = () => {
      this.setState({showInfos: false})
      //this.setState({...initialState})
     }


 
render() {
    return (
      <View style={estilo.fundo} >

        <View style={estilo.cabecalho}>
            <Text style={estilo.header} >Veja se está aprovado!</Text>
        </View>

        <View> 
          {(this.state.media >= 5 && this.state.media != null ) ? <Text style={estilo.aprovado} >Aprovado!</Text> : false }
          {(this.state.media < 5 && this.state.media != null ) ? <Text style={estilo.reprovado} >Reprovado!</Text> : false } 
        </View>

        <Text> </Text>

        <View style={estilo.tela} >
          
          <View style={estilo.central} >
            <Input nota={this.primeiraNota} nome='Nota' peso={this.primeiroPeso} />
            <Text>   </Text>
            <Input nota={this.segundaNota} nome='Nota' peso={this.segundoPeso} /> 
            <Text>   </Text>
            <Input nota={this.terceiraNota} nome='Nota' peso={this.terceiroPeso}  />
          </View>

          <ButtonCalcular conta={this.conta}  />

          <ButtonInfo aperta={ () => { 
            (this.state.media != null) ? this.setState({showInfos: true})  : false }}  />
        
          <View style={estilo.final}>
              <ButtonInst aperta={() => this.setState({showInstructions: true})} />
          </View>
        </View>

        <Informacao visible={this.state.showInfos} media={this.state.media} 
          cancel={this.reset}  /> 

        <Instrucao visible={this.state.showInstructions} 
          cancel={() => this.setState({showInstructions: false }) } />
      </View>
    )
  } 
}



const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#D6D8DF',
    //justifyContent: 'center',
    alignItems: 'center',
},
final:{
    bottom: -85,
  },
  cabecalho:{
      flex: 1,
      marginTop: 15,
  },
  tela: {
    flex: 2,
    //justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  central: {
    flexDirection: 'row',
    margin: 15
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    //justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'justify',
    color: '#34495E',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  template: {
    flexDirection: 'row',
  },
  aprovado: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  reprovado: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',

  },
})