Array.prototype.map2 = function(callback) {
    const newA = []
    for (let i=0; i < this.length; i++) {
        newA.push(callback(this[i], i, this))
    }
    return newA
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 1.99 }',
    '{ "nome": "Lapis", "preco": 4.50}',
    '{ "nome": "Caderno", "preco": 23.70 }',
    '{ "nome": "Caneca", "preco": 15.00 }'
]


const pobj = json => JSON.parse(json)


const apnasPreco = produto => produto.preco


const valores = carrinho.map(pobj).map(apnasPreco)
console.log(valores)
