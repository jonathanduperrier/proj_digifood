import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { PaymentCartComponent } from './payment-cart/payment-cart.component';

const routes: Routes = [
  {path: "", redirectTo: "/list_products", pathMatch: "full"},
  {path: "list_products", component: ListProductsComponent},
  {path: "payment_cart", component: PaymentCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
