import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ProductsModel } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiURL: string = 'https://mariam-egm.github.io/products-json-file/products.json'
  constructor(private http: HttpClient) { }
  public getJSON() {
    return this.http.get <ProductsModel[]> (this.apiURL);
}
}
