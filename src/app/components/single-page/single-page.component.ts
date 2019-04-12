import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsModel } from 'src/app/models/products.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {
  products: ProductsModel[]
  product: any;
  productId: string;
  constructor(
  private productsService: ProductsService,
  private router: Router,
  private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.productsService.getJSON().subscribe(data => this.products = data)
    this.route.params.subscribe((param : Params) => this.productId = param['productIndex'])
  }
}
