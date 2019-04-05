const escola = 
[
 {
    nome: 'Turma 1',
    alunos: 
    [
        {
            nome: 'Gustavo',
            nota: 8.1
        },
        {
            nome: 'Ana',
            nota: 9.3
        }
    ]
 },
 {
    nome: 'Turma 2',
    alunos: 
    [
        {
            nome: 'Rebeca',
            nota: 8.9
        },
        {
            nome: 'Ana',
            nota: 7.3
        }
    ]
 }
]

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const result = escola.flatMap(a => a.alunos.map(a => a.nota))
console.log(result);


