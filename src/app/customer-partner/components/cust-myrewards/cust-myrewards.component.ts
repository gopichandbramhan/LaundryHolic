import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-myrewards',
  templateUrl: './cust-myrewards.component.html',
  styleUrls: ['./cust-myrewards.component.css']
})
export class CustMyrewardsComponent {
  constructor(private router: Router) {}
  gotoAddMoneyToWallet() {
    this.router.navigate(['/customer/myrewards/cust_add_moneyto_wallet']);
  }

  walletamount = 1550;
  walletdatas = [
    { date: '16 Apr', content: 'Money added to wallet', amount: 50 },
    { date: '15 Apr', content: 'Cashback received for sending money', amount: 5 },
    { date: '14 Apr', content: 'Received refer amount', amount: 5 },
    { date: '15 Apr', content: 'Cashback received for sending money', amount: 5 },
    { date: '15 Apr', content: 'Cashback received for sending money', amount: 5 },
    { date: '15 Apr', content: 'Cashback received for sending money', amount: 5 },
    { date: '15 Apr', content: 'Cashback received for sending money', amount: 5 },
    { date: '15 Apr', content: 'Cashback received for sending money', amount: 5 },
    { date: '15 Apr', content: 'Cashback received for sending money', amount: 5 },
  ]
  LHPoints = 50;
  LHPointsData = [
    { date: '16 Apr', content: 'LH points added for order',orderId: 1001, amount: 25 },
    { date: '16 Apr', content: 'LH points added for order',orderId: 1001, amount: 50 },
    { date: '16 Apr', content: 'LH points added for order',orderId: 1001, amount: 25 },
    { date: '16 Apr', content: 'LH points added for order',orderId: 1001, amount: 50 },
    { date: '16 Apr', content: 'LH points added for order',orderId: 1001, amount: 25 },
    { date: '16 Apr', content: 'LH points added for order',orderId: 1001, amount: 50 },
  ]

  showWallet: boolean = true;
  showLHPoints: boolean = false;
}
