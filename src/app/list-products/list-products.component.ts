import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProduitsService } from 'src/app/services/produits.service';

import * as data from '../../menu.json';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient
) {

}


  ngOnInit(): void {
    console.log("init list product");
  }

}
