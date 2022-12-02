const carrinho = [
    '{ "nome": "Borracha", "preco": 1.99 }',
    '{ "nome": "Lapis", "preco": 4.50}',
    '{ "nome": "Caderno", "preco": 23.70 }',
    '{ "nome": "Caneca", "preco": 15.00 }'
]

// objetivo: array apenas com os preços 

// solução: Primeiro transformamos para objeto
//          Segundo retiramos os valores e imprimimos


// Transformando
const pobj = json => JSON.parse(json)

// Pegando os valores
const apnasPreco = produto => produto.preco


const valores = carrinho.map(pobj).map(apnasPreco)
console.log(valores)


// Quando transformamos em obj indexamos o preço com valor determinado, então quando chamamos o 
// .preco estamos pegando o valor atribuido para cada um deles !!!