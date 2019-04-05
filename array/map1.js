const num = [1, 2, 3, 4, 5]

let resultado = num.map(e => e * 3)
   .map(e => e + 10)
   .map(e => `R$:${parseFloat(e).toFixed(2).replace('.', ',')}`)

console.log(resultado)
