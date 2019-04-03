const notas = [ 7.7, 8, 5.8, 9, 6.5, 5.5];

//sem callback
let notasBaixas = [];
for (let i in notas) {
    if (notas[i] < 7) {
       notasBaixas.push(notas[i]);
    }
}

//console.log(notasBaixas);

//com callback 
notasBaixas = notas.filter(nota => nota < 7);

console.log(notasBaixas);
