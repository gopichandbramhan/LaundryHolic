
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-delivery-address',
  templateUrl: './cust-delivery-address.component.html',
  styleUrls: ['./cust-delivery-address.component.css']
})
export class CustDeliveryAddressComponent {
  constructor(private router: Router){}
  goBack() {
    this.router.navigate(['/customer/myaccount']);
  }
}
