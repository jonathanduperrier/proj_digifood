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
          for(let j=0;j<this.produits[i].products.length; j++){
            this.listeProd.push(this.produits[i].products[j]);
          }
        }
        this.globalObj = this.fusion_prod_qty(this.listeProd, this.product_cart);
      }
    );
  }

  public fusion_prod_qty(listeProd:Produit[], product_cart:ProductCart[]){
    let globalObj:ProduitQte[] = [];
    this.listeProd.forEach(res1 => {
      this.product_cart.forEach(res2 => {
        if(res1.id === res2.id){
          globalObj.push({
            id: res1.id,
            name: res1.name,
            price: res1.price,
            tva: res1.tva,
            image: res1.image,
            qteProd: res2.qteProd,
          });
        }
      });
    });
    return globalObj;
  }

  public pay() {
    this.product_cart = [];
    this.produitsService.setProductCart(this.product_cart);
  }
}
