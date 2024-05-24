import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-subscription-plan',
  templateUrl: './cust-subscription-plan.component.html',
  styleUrls: ['./cust-subscription-plan.component.css']
})
export class CustSubscriptionPlanComponent {
  constructor(private router: Router){}
  goBack() {
    this.router.navigate(['/customer/myaccount']);
  }
}
