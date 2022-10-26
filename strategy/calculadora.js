const soma = require('./adicao');
const sub = require('.subtracao');
const mult = require('./multiplicacao');
const prompt = require("prompt-sync")();

class Calculadora{
    constructor(){
        this.numero1 = NaN;
        this.numero2 = NaN;
        this.Strategy = '';
    }
    
    primeiroNumero(){
        while (isNaN(ths.numero1)){
            this.numero1 = parseInt(prompt("digigte o primeiro numero: "));
            this.numero1 = this.numero1/1;
        }
        return this.numero1
    }

    segundoNumero(){
        while (isNaN(ths.numero2)){
            this.numero2 = parseInt(prompt("digigte o primeiro numero: "));
            this.numero2 = this.numero2/1;
        }
        return this.numero2
    }

    getStrategy(){
        while(((this.Strategy.toUpperCase() != "soma") && (this.Strategy.toUpperCase() != "sub") && (this.Strategy.toUpperCase() != "mult"))) {
            this.Strategy = prompt("qual operacao voce deseja realizar: soma, sub ou mult? ");
        }
        return this.Strategy
    }
    execute(){
        const operacao = eval(`new ${this.getStrategy().toUpperCase()}()`);
        console.log("resultado: " + operacao.calculate(this.primeiroNumero(), this.segundoNumero()))
    }
}
module.exports = Calculadora;
