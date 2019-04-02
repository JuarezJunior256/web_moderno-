//function in JS is First-Class  Object 
//Higher-order function

//criar de forma literal 
function fun1() { }

//armazenar em uma variável 
const fun2 = function () { }

//armazenar em um array
const array = [ function(a,b) {return a + b}, fun1, fun2]

//armazenar e um atributo de objeto
const obj = { }
obj.falar = function () { return 'opa'}

//passar function com param 
function run(func) {
    func();
}

// uma função pode retonar/conter uma fução 
function soma(a, b) {
    return function(c) {
       console.log(a + b + c);
       
    }
}
soma(2,3)(4);