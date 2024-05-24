import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent {
  showInProgressButton: boolean = true;
  showCompletedButton: boolean = false;
  openModel() {
    const modelDiv = document.getElementById('exampleModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  CloseModel() {
    const modelDiv = document.getElementById('exampleModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  markAsCompleted() {
    const modelDiv = document.getElementById('exampleModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
    this.showInProgressButton = false;
    this.showCompletedButton = true;

  }

  showPendingOrdersAccordions: boolean = true;
  showDeliveredOrdersAccordions: boolean = false;
  showCancelledOrdersAccordions: boolean = false;

  constructor() { }

  toggleshowPendingOrdersAccordions() {
    this.showPendingOrdersAccordions = true;
    this.showDeliveredOrdersAccordions = false;
    this.showCancelledOrdersAccordions = false;
  }

  toggleDeliveredOrdersAccordions() {
    this.showPendingOrdersAccordions = false;
    this.showDeliveredOrdersAccordions = true;
    this.showCancelledOrdersAccordions = false;
  }

  toggleshowCancelledOrdersAccordions() {
    this.showPendingOrdersAccordions = false;
    this.showDeliveredOrdersAccordions = false;
    this.showCancelledOrdersAccordions = true;
  }

showDLaundryBtn:boolean=true;
hideLaundryBtn:boolean=false;
// toggleBtn(){
//   this.showDLaundryBtn=false;
//   this.hideLaundryBtn=true;
// }
  youClicked(){
    Swal.fire({
      title: "Are you sure you want to add Laundry in Process.",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true
    }).then((result)=>{
       if (result.isConfirmed){
        this.hideLaundryBtn=true;
        this.showDLaundryBtn=false;
      }
    })
  }
}