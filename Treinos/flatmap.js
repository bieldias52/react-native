const escola = [{
    turma: 'turma m1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.2
    }, {
        nome: 'Ana',
        nota: 9.1
    }]
}, {
    turma: 'turma m2',
    alunos: [{
        nome: 'Maria',
        nota: 8.3
    }, {
        noem: 'Luiz',
        nota: 9.2
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = tur => tur.alunos.map(getNotaAluno)

const notas = escola.map(getNotaTurma)
console.log(notas)

Array.prototype.flatMap =function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const unico = escola.flatMap(getNotaTurma)
console.log(unico)


// console.log([].concat(notas))