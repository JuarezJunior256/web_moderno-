function criarProduto(nome, preco) {
  return {
      nome, 
      preco, 
      desconto: 0.2
  }
}

console.log(criarProduto('Celular', 2500.00));
console.log(criarProduto('Notebook', 4500.00));
console.log(criarProduto('TV', 1600.00));
