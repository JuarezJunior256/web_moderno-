let aprovados = ['bia', 'carlos', 'ana'] //criando array
aprovados[3] = 'paulo' //adicionando item na posição desejada do arrya
aprovados.push('abia');//adicionando item na ultima posição do array
console.log(aprovados);
console.log(`Tamanho do Array: ${aprovados.length}`);

aprovados.sort();// reorganizando array
console.log(aprovados);

delete aprovados[1] //deletando um item do array
console.log(aprovados);

let alunos = ['João', 'Felipe', 'Marcela']
alunos.splice(1, 1) //apando um item a partir do index 
console.log(alunos);



