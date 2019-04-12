import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsModel } from 'src/app/models/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: ProductsModel[]

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    return this.productsService.getJSON().subscribe(data => this.products = data)
  }

}
