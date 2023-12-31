import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatProd } from '../models/catprod.model';
import { ProductCart } from '../models/productcart.model';

@Injectable({
  providedIn: 'root'
})

export class ProduitsService {

  product_cart:ProductCart[] = [];

  constructor(private http: HttpClient) {

  }

  public getListOfProducts(){
    return this.http.get<CatProd[]>('./assets/menu.json');
  }

  public setProductCart(product_cart:ProductCart[]){
    this.product_cart = product_cart;
  }

  public getProductCart(){
    return this.product_cart;
  }
}