import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProduitsService } from 'src/app/services/produits.service';


import * as data from '../../assets/menu.json';
import { CatProd } from '../models/catprod.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  public produits: any;
  public destroy$: Subject<boolean> = new Subject<boolean>();
  active = 'Boissons';

  constructor(
    private http: HttpClient,
    private produitsService: ProduitsService,
) { }

  ngOnInit(): void {
    console.log("init list product");
    this.initData();
  }

  public initData() {
    this.produitsService.getListOfProducts().pipe(takeUntil(this.destroy$)).subscribe(
      (res: CatProd) => {
        this.produits = res;
        // console.log("this.produits");
        // console.log(this.produits.categories);
      }
    );
  }

}
