//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 20.00, tag: 'promoção'
})

console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Caneta'
produto.descricao = 'caneta azul'
delete produto.tag

console.log(produto);

//Object.seal
const pessoa = { nome: 'Junior', idade: 28}
Object.seal(pessoa) // não adiciona e nem deleta dados, mas pode moficar 
console.log('Selado: ', Object.isSealed(pessoa));
