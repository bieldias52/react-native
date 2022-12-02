const produtos = [
    { nome: 'Notebook', preco: 4499, fragil: true},
    { nome: 'livro', preco: 899, fragil: false},
    { nome: 'Copo de vidro', preco: 37.99, fragil: true},
    { nome: 'Copo de plastico', preco: 12.99, fragil: false}
]

const cuidado = produto => produto.fragil 
const caro = produto => produto.preco >= 500

const lista = produtos.filter(cuidado).filter(caro)


console.log(lista)
