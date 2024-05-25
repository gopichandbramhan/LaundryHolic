import { Component } from '@angular/core';
import { AddProductToCartService } from '../../customer-services/add-product-to-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totalItem : number = 0;
 constructor(private addtocart: AddProductToCartService) {}

 ngOnInit(): void {
  this.addtocart.getProducts().subscribe( res => {
    this.totalItem = res.length;
  })
 }
}