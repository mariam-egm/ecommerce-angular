import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Input('name') name: string;
  @Input('price') price: string;
  @Input('imageURL') imageURL: string;
  @Input('description') description: string;
  ngOnInit() {
  }
  addToWishList(){
    alert('Added To Wish list');
  }
  addToCart(){
    alert('added To cart');
  }
  seeDetails(){
    alert('see details');
  }
}
