import { Component } from '@angular/core';
import * as data from '../../menu.json';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  

  ngOnInit(): void {
    console.log("init list product");
    
  }

}
