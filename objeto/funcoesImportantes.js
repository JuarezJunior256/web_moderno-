const pessoa = {
    nome: 'Junior',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); //pegando chaves do objeto
console.log(Object.values(pessoa));//pegando valores do objeto
console.log(Object.entries(pessoa));//transformando objeto em um array

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable:false,
    value: '01/01/2019'
})

console.log(Object.keys(pessoa));

//object.assign (ES6)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //concatena objetos em um objeto novo

console.log(obj);
