// As funções podem ser declaradas, vazias, associadas a constantes ou
// na forma de arrow function.

// Para usar a arrow function temos que atrelar a um export ou a uma
// constante, arrow functions ja possuem um return implicito, e possuem
// algumas vantagem em relação a funcoes 'normais' relacionadas ao 
// comando " this. ".
// Para exportar as funcoes podemos inseri-las dentro do "export default"
// ou podemos também usar apenas o " export ".

function declarada(parametro) {
    return 
}

function vazia() {
    return
}

const constante = function () {
    return
}



const arrow = () => 1+2 

export default function funcao() {
    return 
}



// => {
//     return (
//         1 + 2 
//     )
// }
// Ou até mesmo :
// export default () => 1+2

export { arrow, declarada, vazia, constante}