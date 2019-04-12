import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cartProducts;

  constructor() { }

  ngOnInit() {
    this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []    
  }

  deleteProduct(index: number){
    this.cartProducts.splice(index,1);
    console.log(this.cartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    alert('deleted');
  }
}
