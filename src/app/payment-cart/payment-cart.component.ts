import { Component } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProduitsService } from 'src/app/services/produits.service';
import { Produit } from '../models/produit.model';
import { ProductCart } from '../models/productcart.model';
import { ProduitQte } from '../models/produit_qte.model';

@Component({
  selector: 'app-payment-cart',
  templateUrl: './payment-cart.component.html',
  styleUrls: ['./payment-cart.component.scss']
})
export class PaymentCartComponent {
  constructor(
    private produitsService: ProduitsService,
) { }
  public product_cart:ProductCart[] = [];
  public produits:any;
  public produitsTab:any;
  public destroy$: Subject<boolean> = new Subject<boolean>();
  public listeProd: Produit[] = [];
  public globalObj: ProduitQte[] = [];

  ngOnInit(): void {
    this.initData();
  }
  public initData() {
    this.product_cart = this.produitsService.getProductCart();
    this.produitsService.getListOfProducts().pipe(takeUntil(this.destroy$)).subscribe(
      (res: any) => {
        this.produits = res.categories;
        this.globalObj = [];
        for(let i=0;i<this.produits.length; i++){
          //let k=0;
          for(let j=0;j<this.produits[i].products.length; j++){
            this.listeProd.push(this.produits[i].products[j]);
            if(this.globalObj !== undefined){
              this.globalObj.push(
                {
                  id:this.produits[i].products[j].id,
                  name: this.produits[i].products[j].name,
                  price: this.produits[i].products[j].price,
                  tva: this.produits[i].products[j].tva,
                  image: this.produits[i].products[j].image,
                  qteProd: this.product_cart[j].qteProd
                }
              );
              /*this.globalObj[j].id = this.produits[i].products[j].id;
              this.globalObj[j].name = this.produits[i].products[j].name;
              this.globalObj[j].price = this.produits[i].products[j].price;
              this.globalObj[j].tva = this.produits[i].products[j].tva;
              this.globalObj[j].image = this.produits[i].products[j].image;
              this.globalObj[j].qteProd = this.product_cart[j].qteProd;*/
            }
          }
        }
        console.log("this.listeProd : ");
        console.log(this.listeProd);
        console.log("this.product_cart : ");
        console.log(this.product_cart);
        console.log("this.globalObj : ");
        console.log(this.globalObj);
      }
    );
  }
  public pay() {
    this.product_cart = [];
    this.produitsService.setProductCart(this.product_cart);
  }
}
