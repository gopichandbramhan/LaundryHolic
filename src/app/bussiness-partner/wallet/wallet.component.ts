import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  value: number = 4000;

  handleButton1(element: any) {
    console.log('Button 1 clicked for element:', element);
  }

}
