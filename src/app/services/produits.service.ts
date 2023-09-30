import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CatProd } from '../models/catprod.model';

@Injectable({
  providedIn: 'root'
})

export class ProduitsService {

  constructor(private http: HttpClient) { }

  public getListOfProducts(){
    return this.http.get<CatProd>('./assets/menu.json');
  }
}