const dados = {
    nome: 'Gabriel',
    sobrenome: 'Lange',
    idade: 21,
    extra: {
        faculdade: 'UnB',
        curso: 'Física',
        semestre: 8,
    }

}

const array = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]

const [ n1, n2 , , , , , , n8 ] = array
console.log(n1, n2, n8)

const matriz = [[1, 2], [3, 4]]

const [[,m21], [m12,] ] = matriz
console.log(m21,m12)