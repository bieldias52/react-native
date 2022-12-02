const alunos = [
    { nome: 'João', nota: 9},
    { nome: 'Marcelo', nota: 7}
]


/////// Imperativo /////
// estamos mais preocupados na forma como as coisas serão feitas
// muito mais complexos de se entender 
// tudo acontece ao mesmo tempo 
// menos reutilizável 

let total1 = 0 
for ( let i = 0; i < alunos.length; i++ ) {
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

/////// Declarativo //////
// preocupação maior com o resultado final 
// facilmente reutilizavel devido a sua natureza de contrução
// mais facil de se entender  

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual 

const media = (alunos.map(getNota).reduce(soma))/alunos.length

console.log(media)