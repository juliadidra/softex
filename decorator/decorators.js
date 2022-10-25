const Sanduiche_Carne = require ('./Sanduiche_Carne');
const Sanduiche_Frango = require ('./Sanduiche_Frango');

function QueijoMussarelaRalado(c) {
    let novo = Object.create(c);
    novo.price = () => c.price() + 2.00;
    console.log('O adicional de queijo mussarela custa 2,00');
    console.log('preço total:', novo.price());
    return novo;
}

function Bacon(c) {
    let novo = Object.create(c);
    novo.price = () => c.price() + 3.00;
    console.log('adicional de bacon custa 3,00');
    console.log('o preço total:', novo.price());
    return novo;
}

function Pepperoni(c) {
    let novo = Object.create(c);
    novo.price = () => c.price() + 0.99;
    console.log('O adicional de pepperoni custa: 0,99');
    console.log('o preço total:', novo.price());
    return novo;
}

var SanduicheCarne = new Sanduiche_Carne();
var sanduicheCarneQueijoMussarela = new QueijoMussarelaRalado(SanduicheCarne);
var sanduicheCarneQueijoMussarelaBacon = new Bacon(sanduicheCarneQueijoMussarela);

var sanduicheFrango = new Sanduiche_Frango;
var sanduicheFrangoQueijoMussarela = new QueijoMussarelaRalado(sanduicheFrango);
var sanduicheFrangoQueijoMussarelaPepperoni = new Pepperoni(sanduicheFrangoQueijoMussarela);
