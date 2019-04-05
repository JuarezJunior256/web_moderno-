//implementando proprio filter
Array.prototype.filter2 = function (callback) {
  const newArray = []
  for (let i = 0;  i < this.length; i++) {
    if (callback(this[i], i, this)) {
       newArray.push(this[i])
    }
  }

  return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4199, fragil: true},
    {nome: 'Fone', preco: 12.49, fragil: true},
    {nome: 'Mouse', preco: 18.99, fragil: false},
]

console.log(produtos.filter2(p => {
    return p.fragil == true && p.preco > 500
}));
