import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-myaccount',
  templateUrl: './cust-myaccount.component.html',
  styleUrls: ['./cust-myaccount.component.css']
})
export class CustMyaccountComponent {
  imageUrl: string = 'assets/Images/edit.jpg';

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  constructor(private router: Router) { }
  gotoDeliveryAddress() {
    this.router.navigate(['customer/myaccount/cust_delivery_address']);
  }
  gotoContactUs() {
    this.router.navigate(['customer/myaccount/cust_contactus']);
  }
  gotoUseLaundryholic() {
    this.router.navigate(['customer/myaccount/cust_use_laundryholic_app']);
  }
  gotoEditProfile() {
    this.router.navigate(['customer/myaccount/cust_edit_profile']);
  }

  gotoSubscriptionPlan() {
    this.router.navigate(['customer/myaccount/cust_subscription_plan']);
  }

  gotoPrivacyPolicy() {
    this.router.navigate(['customer/myaccount/cust_privacy_policy'])
  }

  gotoCustomerSupport() {
    this.router.navigate(['customer/myaccount/cust_support']);
  }

}
