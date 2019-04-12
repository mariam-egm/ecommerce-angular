import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }
  @Input('name') name: string;
  @Input('price') price: string;
  @Input('imageURL') imageURL: string;
  @Input('description') description: string;
  @Input('productIndex') productIndex: any;
  ngOnInit() {
  }
  addToWishList(){
    
    alert('Added To Wish list');
  }
  addToCart(){
    alert('added To cart');
  }

  seeDetails(path: string):void{
    this.router.navigate([path,event.target['productIndex']]);
  }
}
