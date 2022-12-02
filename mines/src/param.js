import { Dimensions } from 'react-native'


const params = {
    blocksize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,  // Proporção do cabeçalho em relação a tela
    dificuldade: 0.1,         // Porcentagem da tela com minas, valor alterável 
    getColumns() {
        const width = Dimensions.get('window').width
        return Math.floor( width/this.blocksize )     // calculando a quantidade de colunas
    },
    getRows() {
        const totalHeigth = Dimensions.get('window').height
        const boardHeigth = totalHeigth * ( 1 - this.headerRatio) //fazemos dessa forma pois estamos usando porcentagem 
        return Math.floor( boardHeigth/this.blocksize )
    }
}


export default params