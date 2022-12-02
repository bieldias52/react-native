const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Marcela', nota: 8.7, bolsista: true},
    { nome: 'Jorge', nota: 8.9, bolsista: true},
    { nome: 'Maria', nota: 9.3, bolsista: false}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulado,atual){
    
    console.log(acumulado, atual)
    return acumulado + atual
}, 0)
console.log(resultado)

// Tb podemos passar um array como valor inicial da nossa função reduce
// Caso não seja passado, o valor inicil ("acumulado") será o item 0 do array