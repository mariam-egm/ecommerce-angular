import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { ProductsModel } from '../models/products.model';
import { catchError, map } from "rxjs/operators"
import { provideLocationStrategy } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsAPI;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  };
  apiURL: string = 'https://mariam-egm.github.io/products-json-file/products.json'
  constructor(private http: HttpClient) {
    
   }
  public getJSON() {
    this.productsAPI = this.http.get <ProductsModel[]> (this.apiURL);
    return this.productsAPI;
  }
}
