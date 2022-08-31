/*Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, 
tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.*/

var banco = {
    conta: 1234578,
    saldo: 500,
    tipoconta: 'corrente',
    agencia: 12,
    buscar_saldo: function(){
        return console.log (`o seu saldo é de: R$ ${banco.saldo}`);
    },
    deposito: function(valor){
       banco.saldo =  banco.saldo + valor;
       return console.log(`voce depositou R$ ${valor} e esta com R$ ${banco.saldo} na conta`)
    },
    saque: function(valor){
        banco.saldo = banco.saldo - valor;
        return console.log(`voce sacou R$ ${valor} e esta com R$ ${banco.saldo} na conta`)
    },
    num_conta: function(){
        return console.log(`o numero da sua conta e: ${banco.conta} `)
    }
};
banco.buscar_saldo();
banco.deposito(45);
banco.saque(10);
banco.num_conta();
