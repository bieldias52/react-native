//////////////////////////// ESTILOS /////////////////////////////////////

// Para o caso do <View>, estamos pensando em uma visualização por parte
// do usuário. A partir dele conseguimos usar outro outros componentes 
// definir a parte visual e de organização visual, como por exemplo o
// "styleSheet" e o "flexBox".
// Tambem podemos colocar estilosem textos, botoes e etc...

// Vamos criar um estilo para deixar bonito.
// Para isso precisamos importar o "styleSheet" 
// Usamos o comando ".create " para criar os estilos que usaremos e dentro
// cd cada um dos estilos usamos as propriedades do flexbox 

import { StyleSheet } from "react-native"

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoCentral: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: 'red',    
        
    },
    texto2: {
        fontSize: 20,
        color: '#FFF',
    },
    textoSub: { 
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
    },
})

// export { styles }