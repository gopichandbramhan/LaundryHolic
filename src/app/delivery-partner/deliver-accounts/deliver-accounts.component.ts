import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliver-accounts',
  templateUrl: './deliver-accounts.component.html',
  styleUrls: ['./deliver-accounts.component.css']
})
export class DeliverAccountsComponent {
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

  gotoContactUs() {
    this.router.navigate(['delivery/deliver_accounts/contact_us']);
  }
  gotoUseLaundryholic() {
    this.router.navigate(['delivery/deliver_accounts/use_laundryholic_app']);
  }
  gotoEditProfile() {
    this.router.navigate(['delivery/deliver_accounts/edit_profile']);
  }

  gotoPrivacyPolicy() {
    this.router.navigate(['delivery/deliver_accounts/cust_privacy_policy'])
  }

}
