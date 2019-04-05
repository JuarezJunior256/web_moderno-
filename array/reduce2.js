const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//desafio 1: todos alunos são bolsistas?
const result = alunos.map(a => a.bolsista)
.reduce(function(resultado, bolsista ) {
    return resultado && bolsista
})
console.log(result);

//desafio 2: algum aluno é bolsistas?
const result2 = alunos.map(a => a.bolsista)
.reduce(function(resultado, bolsista ) {
    return resultado || bolsista
})
console.log(result2);