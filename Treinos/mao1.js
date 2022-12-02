const num = [1, 2, 3, 4, 5]

let resultado = num.map(function(e){
    return e
})

console.log(resultado)

const soma = e => e + 15
const mult = e => e * 3
const dinheiros = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = num.map(soma).map(mult).map(dinheiros)

console.log('Dinheiros',resultado)