import { Component } from '@angular/core';

import { ProduitsService } from 'src/app/services/produits.service';
import { ProductCart } from '../models/productcart.model';


@Component({
  selector: 'app-payment-cart',
  templateUrl: './payment-cart.component.html',
  styleUrls: ['./payment-cart.component.scss']
})
export class PaymentCartComponent {
  constructor(
    private produitsService: ProduitsService,
) { }
  public product_cart:ProductCart[] = [
    {
      id:0,
      qteProd:0
    }
  ];

  ngOnInit(): void {
    this.initData();
  }
  public initData() {
    this.product_cart = this.produitsService.getProductCart();
  }
  public pay() {
    this.product_cart = [];
    this.produitsService.setProductCart(this.product_cart);
  }
}
