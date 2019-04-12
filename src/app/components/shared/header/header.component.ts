import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private wishListProducts;
  private cartCounter;
  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
    this.storage.getCartCounter().subscribe(data => this.cartCounter = data)
    this.wishListProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
  }

}
