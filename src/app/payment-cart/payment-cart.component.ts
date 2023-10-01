import { Component } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  public produits:any;
  public produitsTab:any;
  public destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.initData();
  }
  public initData() {
    this.product_cart = this.produitsService.getProductCart();
    this.produitsService.getListOfProducts().pipe(takeUntil(this.destroy$)).subscribe(
      (res: any) => {
        this.produits = res.categories;
        console.log("this.produits");
        console.log(this.produits);

      }
    );
  }
  public pay() {
    this.product_cart = [];
    this.produitsService.setProductCart(this.product_cart);
  }
}
