Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = acumulador + this[i]
        //acumulador = callback(acumulador, this[i], i, this)
    }
return acumulador
}


const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 5]
console.log(nums.reduce2(soma))

// const alunos = [
//     { nome: 'João', nota: 7.3, bolsista: false},
//     { nome: 'Marcela', nota: 8.7, bolsista: true},
//     { nome: 'Jorge', nota: 8.9, bolsista: true},
//     { nome: 'Maria', nota: 9.3, bolsista: false}
// ]

// console.log(alunos.map(a => a.nota))
// const resultado = alunos.map(a => a.nota).reduce2(function(acumulado,atual){
    
//     console.log(acumulado, atual)
//     return acumulado + atual
// }, 0)
// console.log(resultado)