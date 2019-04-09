const http = require('http')
//recurso do ES8
//Objetivo de simplificar o uso de promises...

const getTurma = letra => {
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


let obterAlunos = async () => {
     const tA = await getTurma('A')
     const tB = await getTurma('B')
     const tC = await getTurma('C')

     return [].concat(tA,tB,tC)
}// retorna um objeto AsyncFunction

obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes))