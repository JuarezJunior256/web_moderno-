//operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de função 

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 5000}
const clone = {ativo: true, ...funcionario}

console.log(clone);

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoB = ['Maria', 'Ricardo', ...grupoA]
console.log(grupoB);
