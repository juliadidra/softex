const Sanduiche = require ('./sanduiche');

class Sanduiche_Frango extends Sanduiche {
    constructor (price) {
        super (price)
        let novo = Object.create(new Sanduiche());
        this.price = () => novo.price() + 4.50;
        console.log('O sanduiche de frango custa 4,50');
        return this
    }
}
module.exports = Sanduiche_Frango;
