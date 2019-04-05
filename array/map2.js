const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Dasafio, converter json em um objeto e mostrar somente os preços

result = carrinho.map(e => JSON.parse(e)).map(e => e.preco)
console.log(result);
