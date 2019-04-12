import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  private cartProducts;  
  @Input('name') name: string;


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
