const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo item do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.shift() //remove o primeiro item do array
console.log(pilotos);

pilotos.unshift('Hamilton') // adicina item na primeisa posição
console.log(pilotos);

// splice pode adicionar ou remover item do array

pilotos.splice(2, 0, 'Bottas', 'Massa')// adicionando 
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) //gera um novo array apartir do index desejado
console.log(algunsPilotos);




