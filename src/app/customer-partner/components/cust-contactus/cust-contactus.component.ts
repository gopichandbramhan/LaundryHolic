
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-contactus',
  templateUrl: './cust-contactus.component.html',
  styleUrls: ['./cust-contactus.component.css']
})
export class CustContactusComponent {
  constructor(private router: Router){}
  goBack() {
    this.router.navigate(['/customer/myaccount']);
  }
}
