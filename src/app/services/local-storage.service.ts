import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private cartProducts
  private wishListProducts
  cartCounter: BehaviorSubject<any>= new BehaviorSubject('')
  wishCounter: BehaviorSubject<any>= new BehaviorSubject('')
  constructor() { 
    this.cartCounter.next(this.getCartLength())
  }
  getCartLength(){
    this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
    return this.cartProducts.length    
  }

  getCartCounter(){
    return this.cartCounter.asObservable();
  }
  // getWishList(){
  //   this.wishListProducts
  // }
}
