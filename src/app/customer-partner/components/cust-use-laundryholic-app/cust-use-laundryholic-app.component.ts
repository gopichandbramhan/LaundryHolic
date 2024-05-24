
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-use-laundryholic-app',
  templateUrl: './cust-use-laundryholic-app.component.html',
  styleUrls: ['./cust-use-laundryholic-app.component.css']
})
export class CustUseLaundryholicAppComponent {
  constructor(private router: Router){}
  goBack() {
    this.router.navigate(['/customer/myaccount']);
  }
}
