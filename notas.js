/*Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, 
com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. 
O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova 
para poder passar com nota sete.*/

const readline = require ('readline-sync');

//primeiro codigo
var nota1 = Number(readline.question('digite sua primeira nota: '));
var nota2 = Number(readline.question('digite sua segunda nota: '));
var nota3 = Number(readline.question('digite sua terceira nota: '));

var media = (nota1 + nota2 + nota3)/3;
var res = (media>= 7) ? 'APROVADO' : 'REPROVADO'
console.log(`voce foi ${res} com media ${media}`);

// segundo codigo
var n1 = Number(readline.question('digite a primeira nota: '));
var n2 = Number(readline.question('digite a segunda nota: '));
var valor = 21 - (n1 + n2)

if (valor <= 10) {
    console.log(`voce precisa de ${valor} para passar`)
}
else {
    console.log('voce foi reprovado pois nao consegue passar por media')
}
