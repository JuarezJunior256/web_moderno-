//estrategia 1 para gerar valor padrão
function soma1(x,y,z) {
    x = x || 1;
    y = y || 1;
    z = z || 1;

    return x + y + z;
}

//estrategia 2, 3, 4 para gerar valor padrão 
function soma2(a,b,c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
} 

//valor padrão do es2015
function soma3(a = 1, b = 2, c = 1) {
    return a + b + c;
}

