//função literal
let dobro = function(x) {
    return 2 * x;
}

//arrow function
dobro = (x) => {
    return 2 * x;
}

//quando só tem uma linha de código 
dobro = a => 2 * a;
console.log(dobro(Math.PI));


ola = () => 'Ola';
console.log(ola());
