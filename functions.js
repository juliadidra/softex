//função sem parametro
function ola () {
    return console.log('hello, world!')
}
ola()


//função com parametro
function soma(num1, num2) {
    var res = num1 + num2;
    return console.log(res);
}
soma(10,5);

//arrow function
const subtracao = (numero1, numero2) => {
    var resultado = numero1 - numero2;
    return console.log(resultado);
}
subtracao(20,10);
