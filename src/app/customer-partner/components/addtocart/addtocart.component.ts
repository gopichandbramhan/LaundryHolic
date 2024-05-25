import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductToCartService } from '../../customer-services/add-product-to-cart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']

})
export class AddtocartComponent {

  public items: any = [];
  public grandTotal: number = 0;

  constructor(private router: Router, private addtocart: AddProductToCartService) { }
  goToService() {
    this.router.navigate(['/customer/services'])
  }
  gotoSchedulePickup() {
    this.router.navigate(['/customer/addtocart/cust_schedule_pickup'])
  }

  ngOnInit(): void {
    this.addtocart.getProducts().subscribe(res => {
      this.items = res;
      this.grandTotal = this.addtocart.getTotalPrice();
    })
  }

  removeItem(item: any) {
    this.addtocart.removeCartProduct(item);
  }

  deleteAllCartItem() {
    this.addtocart.removeAllCartProducts();
  }
}
