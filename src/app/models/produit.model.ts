export class Produit {
    public id: number;
    public name: String;
    public price: number;
    public tva: number;
    public image: String;

    constructor() {
        this.id = 0,
        this.name = '',
        this.price = 0,
        this.tva = 0,
        this.image = ''
    }
}