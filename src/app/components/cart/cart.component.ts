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
    
    console.log(this.cartProducts);
  }

}
