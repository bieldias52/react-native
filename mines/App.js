import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from 'react-native'
import params from "./src/param"
//import Field from "./src/components/Field";
import MineField from "./src/components/MineField";
import{ 
    minedBoard,
    cloneBoard,
    openField,
    explodiu,
    ganhou,
    showMines,
    flagging,
    counting
} from './src/creation'
import Header from "./src/components/Header";
import LevelSelection from "./src/screens/LevelSelection";


export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = this.createState()
    }

    minesAmount = () => {
        const rows = params.getRows()
        const cols = params.getColumns()
        return Math.ceil(rows * cols * params.dificuldade)
    }

    createState = () => {               
        const rows = params.getRows()
        const cols = params.getColumns()
        return {
            board: minedBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false,
            showLevelSelect: false,
        }
    }

    onOpenField = (row, column) => {
        const board = cloneBoard(this.state.board)
        openField(board, row, column)
        const won = ganhou(board)
        const lost = explodiu(board)

        if (lost) {
            showMines(board)
            Alert.alert('Ai é foda parceiro...')
        }

        if (won) {
            Alert.alert('Boa karai, dale')
        }

        this.setState({board, won, lost})
    }

    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board)
        flagging(board, row, column)
        const won = ganhou(board)

        if (won) {
            Alert.alert('Boa karai, dale')
        }
        this.setState({board, won})
    }

    onLevelSelected = level => {
        params.dificuldade = level
        this.setState(this.createState())
    }

    render() {
        return (
            <View style={styles.container}>
                <LevelSelection isVisible={this.state.showLevelSelect}
                    onLevelSelected={this.onLevelSelected}
                    onCancel={() => this.setState({ showLevelSelect: false })} />
                <Header flagsLeft={this.minesAmount() - counting(this.state.board)}
                    onNewGame={() => this.setState(this.createState())} 
                    onFlagPress={() => this.setState({ showLevelSelect: true})} />
                <View style={styles.board}>
                    <MineField board={this.state.board}
                    onOpenField={this.onOpenField}
                    onSelectField={this.onSelectField} />
                </View>

            </View>
        )

    }
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        //alignItems: 'center',

    },
    board: {
        alignItems: 'center',
        backgroundColor: '#AAA',
    }
})


// 1) O estado do jogo se atualiza sempre que fazemos uma açao, entao precisamos "alterar"
//    o estado todas as vezes 