const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Marcela', nota: 8.7, bolsista: false},
    { nome: 'Jorge', nota: 8.9, bolsista: true},
    { nome: 'Maria', nota: 9.3, bolsista: false}
]


// Desafio 1: Todos os alunos são bolsistas ? (R: false)
// Desafio 2: Algum aluno é bolsista ? (R: True)


////////// D1 ////////
const verify = bolsa => bolsa.bolsista
const todos = (acumulado, bolsista) => acumulado && bolsista

const desafio1 = alunos.map(verify).reduce(todos)
console.log(desafio1)



////////// D2 ////////
const algum = (acumulado, bolsista) => acumulado || bolsista

const desafio2 = alunos.map(verify).reduce(algum)
console.log(desafio2)