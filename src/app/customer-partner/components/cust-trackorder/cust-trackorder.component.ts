
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-trackorder',
  templateUrl: './cust-trackorder.component.html',
  styleUrls: ['./cust-trackorder.component.css']
})
export class CustTrackorderComponent {
  constructor(private router: Router){}
  goBack() {
    this.router.navigate(['/customer/myorder']);
  }
}
