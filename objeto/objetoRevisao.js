const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 50

console.log(produto);

delete produto.preco

console.log(produto);


const carro = {
    modelo: 'Gol',
    valor: 40000,
    proprietario: {
        nome: 'Junior',
        idade: 30,
        endereco: {
            rua: 'Av Brasil',
            num: 8
        }
    },
    condutores: [
        {
         nome: 'Rafael',
         idade: 30
        },
        {
         nome: 'Daniel',
         idade: 30
        }
    ]
}

console.log(carro);
console.log(carro.condutores.length);

