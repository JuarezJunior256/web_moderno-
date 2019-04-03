// usando a notação literal 
const obj1 = {}
console.log(obj1);


// Object em js
console.log(typeof Object, typeof new Object);
const obj2 = new Object 
console.log(obj2);

//funcoes construtoras
function Produto(nome, preco, desc) {
   this.nome = nome
   this.getPrecoComDesconto = () => {
       return preco * (1 - desc)
   }
}


//funcão factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase, 
        faltas, 
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

// object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

