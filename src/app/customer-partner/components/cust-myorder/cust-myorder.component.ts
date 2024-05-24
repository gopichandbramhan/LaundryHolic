import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cust-myorder',
  templateUrl: './cust-myorder.component.html',
  styleUrls: ['./cust-myorder.component.css']
})
export class CustMyorderComponent {
  showModal: boolean = false;
  showOrderDetail : boolean = true;
  showDeliveryPerson : boolean = false;
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  constructor(private router: Router){}

  goToTrackOrder(){
    this.router.navigate(['customer/myorder/track_order']);
  }
}