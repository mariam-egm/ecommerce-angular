import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private wishListProducts;

  constructor() { }

  ngOnInit() {
    this.wishListProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
  }

}
