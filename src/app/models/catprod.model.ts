import { Produit } from "./produit.model";
export class CatProd {
    public name:String;
    public products:Produit;

    constructor() {
        this.name='',
        this.products = {
            id : 0,
            name : '',
            price : 0,
            tva : 0,
            image : ''
        }
    }
}