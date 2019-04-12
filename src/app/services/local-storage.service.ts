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
    this.wishCounter.next(this.getWishLength())
  }
  getCartLength(){
    this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
    return this.cartProducts.length
  }

  getCartCounter(){
    return this.cartCounter.asObservable();
  }
  getWishLength(){
    this.wishListProducts = JSON.parse(localStorage.getItem('wishListProducts')) || []
    return this.wishListProducts.length
  }
  getWishCounter(){
    return this.wishCounter.asObservable();
  }
}
