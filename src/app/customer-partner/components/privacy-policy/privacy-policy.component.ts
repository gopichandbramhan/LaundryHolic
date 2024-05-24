
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {
  constructor(private router: Router){}
  gotoHome(){
    this.router.navigate(['/customer/customer-home'])
  }

  goBack() {
    this.router.navigate(['/customer/myaccount']);
  }

  gotoMyAccount(){
    
  }
}
