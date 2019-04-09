// sem promise
const http = require('http')

const getTurma = (letra, callback ) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    http.get(url, res => {
        let result = ''

        res.on('data', dados =>{
            result += dados
        })

        res.on('end', () =>{
            callback(JSON.parse(result))
        })
    })
}

let nomes = []
/*getTurma('A',alunos => { 
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes);
})*/

//refatorando com promises

const getTurmaPromise = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''

            res.on('data', dados =>{
                result += dados
            })

            res.on('end', () =>{
                try{
                    resolve(JSON.parse(result))
                } catch(e) {
                    reject(e)
                }
            })
            
        })
    })
}

Promise.all([getTurmaPromise('A'), getTurmaPromise('B'), getTurmaPromise('C')])
   .then(turmas => [].concat(...turmas))
   .then(alunos => alunos.map(aluno => aluno.nome))
   .then(nomes => console.log(nomes))