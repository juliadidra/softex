const Sanduiche = require ('./sanduiche');

class Sanduiche_Carne extends Sanduiche {
    constructor(price) {
        super (price)
        let novo = Object.create(new Sanduiche());
        this.price = () => novo.price() + 7.49;
        console.log('O sanduiche de carne cussta 7,49');
        return this
    }
}
module.exports = Sanduiche_Carne;
