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
  @Input('productId') productId: string;
  @Input('productIndex') productIndex: any;
  ngOnInit() {
  
  }
  addToWishList(){
    
    alert('Added To Wish list');
  }
  
  addToCart(ProductId: string,
            Description: string,
            Name: string,
            ProductPicUrl: string,
            Price: number)
  {

    let cartProducts: any;

    if (localStorage.getItem("cartProducts")) {
      cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    } else {
        cartProducts = [];
    }
    
    let newProduct = {
      ProductId: ProductId,
      Description:Description,
      Name: Name,
      ProductPicUrl: ProductPicUrl,
      Price: Price
    };
    cartProducts.push(newProduct);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    alert('added To cart');
  }
}
