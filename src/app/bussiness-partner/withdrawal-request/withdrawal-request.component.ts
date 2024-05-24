import { Component } from '@angular/core';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdrawal-request',
  templateUrl: './withdrawal-request.component.html',
  styleUrls: ['./withdrawal-request.component.css']
})



export class WithdrawalRequestComponent {

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }


  walletamount: number = 4000;
  inputvalue: string = '';

  logInputValue() {
    let inputamount: number = parseInt(this.inputvalue);

    if (isNaN(inputamount)) {
      Swal.fire({
        title: 'Please enter a valid amount',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (inputamount == this.walletamount) {
      Swal.fire({
        title: 'Minimum wallet balance required is ₹1000',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    } else if (inputamount < 3000) {
      Swal.fire({
        title: 'Minimum withdrawal amount is ₹3000',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    } else if (inputamount <= (this.walletamount - 1000)) {
      Swal.fire({
        title: 'Money will be credited to your account within 24 hours',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } else if ((inputamount > (this.walletamount - 1000)) && (inputamount < this.walletamount)) {
      Swal.fire({
        title: 'Minimum wallet balance required is ₹1000',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    } else if(inputamount > this.walletamount){
      Swal.fire({
        title: 'Insufficient wallet balance',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  }


}
