
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-support',
  templateUrl: './cust-support.component.html',
  styleUrls: ['./cust-support.component.css']
})
export class CustSupportComponent {
  constructor( private router : Router){}
  goBack() {
    this.router.navigate(['/customer/myaccount']);
  }
  
  openChatBox(){
    this.router.navigate(['customer/myaccount/cust_support/chatbox'])
  }
  openChatbox: boolean= false;
}
