import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../customer-services/product-service.service';
import { AddProductToCartService } from '../../customer-services/add-product-to-cart.service';

@Component({
  selector: 'app-dryclean1',
  templateUrl: './dryclean1.component.html',
  styleUrls: ['./dryclean1.component.css']
})

export class Dryclean1Component implements OnInit{

  public productList: any;
  constructor(private product: ProductServiceService, private addtocart: AddProductToCartService) { }

  ngOnInit() : void {
    this.product.getProduct().subscribe(res  => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, {quantities: 1, total: a.price});
      });
    })
  }


  quantities: { [key: number]: number } = {};

  plus(id: number) {
    if (!this.quantities[id]) {
      this.quantities[id] = 0;
    }
    this.quantities[id] += 1;
  }

  minus(id: number) {
    if (this.quantities[id] > 0) {
      this.quantities[id] -= 1;
    }
  }

  addToCart(item: any) {
    this.addtocart.addToCart(item);
  }
}