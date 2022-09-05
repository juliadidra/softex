/* Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array. */

const aluno = {nome: 'julia', sobrenome: 'didra', faltas: 0}
for(var dado in aluno) {
    console.log(dado)
} 

let notas = [10,5,8,9]
for (var num of notas) {
    console.log(num)
}
