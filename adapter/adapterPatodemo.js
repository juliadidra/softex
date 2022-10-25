const Pato = require('./pato');

var pato = new Pato();
som = pato.FazerQuaQua();
modo = pato.voar();
console.log(som);
console.log(modo);

const AdapterPato = require ('./adapterPato');

var pato = new AdapterPato();
som = pato.FazerQuaQua();
modo = pato.voar();
console.log(som);
console.log(modo);
