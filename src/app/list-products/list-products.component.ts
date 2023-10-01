import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProduitsService } from 'src/app/services/produits.service';

import { CatProd } from '../models/catprod.model';
import { ProductCart } from '../models/productcart.model';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  public produits:any;
  // public produits: CatProd[] = [
  //   {
  //     name: '',
  //     products: {
  //       id : 0,
  //         name : '',
  //         price : 0,
  //         tva : 0,
  //         image : ''
  //     }
  //   }
  // ];
  public destroy$: Subject<boolean> = new Subject<boolean>();
  public activeTab = '';

  constructor(
    private http: HttpClient,
    private produitsService: ProduitsService,
) { }

  ngOnInit(): void {
    this.initData();
  }

  public initData() {
    this.produitsService.getListOfProducts().pipe(takeUntil(this.destroy$)).subscribe(
      (res: any) => {
        this.produits = res.categories;
        this.activeTab = this.produits[0].name;
        let product_cart:ProductCart[];
        product_cart = this.produitsService.getProductCart();
        for(let i=0; i<this.produits.length; i++){
          for(let j=0; j<this.produits[i].products.length; j++){
            product_cart.push({id: this.produits[i].products[j].id, qteProd:0})
          }
        }
        this.produitsService.setProductCart(product_cart);
      }
    );
  }

  public addToKart(id:number) {
    let product_cart:ProductCart[];
    product_cart = this.produitsService.getProductCart();
    console.log("addToKart " + id);
    console.log("product_cart : ");
    console.log(product_cart);
    for(let i=0; i<product_cart.length; i++){
      if(product_cart[i].id === id){
        product_cart[i].qteProd = product_cart[i].qteProd + 1;
      }
    }
  }
}
