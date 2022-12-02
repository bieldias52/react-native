Array.prototype.forEach2 = function(retorno) {
    for (let i = 0; i < this.length; i++ )
    retorno(this[i], i, this)
}


const aprovados = ['Gabriel', 'Artur', 'Felipe']

aprovados.forEach2(function(quem,posicao, tudo){
    console.log(`${posicao + 1}) ${quem}`)
    //console.log(tudo)
})

console.log('opa')