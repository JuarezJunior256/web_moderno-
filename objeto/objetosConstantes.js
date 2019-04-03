const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa);

//congelando o objeto 
Object.freeze(pessoa);

pessoa.nome = 'Ricardo'
console.log('atributo depois de congelado: ' +pessoa.nome);

