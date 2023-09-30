export class Produit {
    public id: Number;
    public name: String;
    public price: Number;
    public tva: Number;
    public image: String;

    constructor() {
        this.id = 0,
        this.name = '',
        this.price = 0,
        this.tva = 0,
        this.image = ''
    }
}