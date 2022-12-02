Array.prototype.filter2 = function(callback) {
    const newA = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newA.push(this[i])
        }
    }
    return newA
    
}



const produtos = [
    { nome: 'Notebook', preco: 4499, fragil: true},
    { nome: 'livro', preco: 899, fragil: false},
    { nome: 'Copo de vidro', preco: 37.99, fragil: true},
    { nome: 'Copo de plastico', preco: 12.99, fragil: false}
]

const cuidado = produto => produto.fragil === true
const caro = produto => produto.preco >= 500

const lista = produtos.filter2(cuidado).filter2(caro)
console.log(lista)
