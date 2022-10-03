class Veiculo {
    _modelo
    _marca
    _cor
    _numeroRodas
    constructor (modelo, marca, cor, numeroRodas) {
        this._modelo = modelo;
        this._marca = marca;
        this._cor = cor;
        this._numeroRodas = numeroRodas;
    
    }
    
}
clone (objeto); {
    objeto.__proto__;
}

let carro = class extends Veiculo {
    constructor ( modelo, marca, cor, numeroRodas, numeroPortas) {
        super (modelo, marca, cor, numeroRodas, numeroPortas);
        this._numeroPortas = numeroPortas;

        let cloneCarro = {
            modelo: this.modelo,
            marca: this.marca,
            cor: this.cor,
            numeroRodas: this.numeroRodas,
            numeroPortas: this.numeroPortas
        }
        Veiculo.prototype.clone = function(objeto){
            objeto.prototype = cloneCarro;
            console.log (`modelo: ${this.modelo} || marca: ${this.marca} || Cor: ${this.cor} || Rodas: ${this.numeroRodas} || Portas: ${this.numeroPortas}`);
        }
    }
}
var carroNissan = new carro ('march', 'nissan', 'prata', '4', '4');
carroNissan.represent();
carroNissan.clone(carroNissan);

const Veiculo = [];
Veiculo.push(carroNissan);

const CloneArray = [];
Veiculo.forEach(function (element){
    CloneArray.push(element.prototype);
});
console.log(Veiculo);
console.log(CloneArray);
