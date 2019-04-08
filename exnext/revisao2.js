//arrow Function
//arrow function são anonimas não aceita nomes, tem que ser atribuida a uma variável
const soma = (a, b) => a + b 
console.log(soma(2,3));

//parametro defautl
function log(texto = 'Node') {
    console.log(texto);
}

log()

//operado rest
function total(...numb) {
   let total = 0

   numb.forEach(n => total += n)
   return total
}

console.log(total(2,3,6));
