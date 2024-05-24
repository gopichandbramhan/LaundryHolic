import { Component } from '@angular/core';

@Component({
  selector: 'app-deliver-myorder',
  templateUrl: './deliver-myorder.component.html',
  styleUrls: ['./deliver-myorder.component.css']
})
export class DeliverMyorderComponent {
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

  showAcceptedOrdersAccordions: boolean = true;
  showProcessingOrdersAccordions: boolean = false;
  showDeliveredOrdersAccordions: boolean = false;
  showRejectedOrdersAccordions: boolean = false;

  constructor() { }

  toggleAcceptedOrdersAccordions() {
    this.showAcceptedOrdersAccordions = true;
    this.showProcessingOrdersAccordions = false;
    this.showDeliveredOrdersAccordions = false;
    this.showRejectedOrdersAccordions = false;
  }

  toggleProcessingOrdersAccordions() {
    this.showAcceptedOrdersAccordions = false;
    this.showProcessingOrdersAccordions = true;
    this.showDeliveredOrdersAccordions = false;
    this.showRejectedOrdersAccordions = false;
  }

  toggleDeliveredOrdersAccordions() {
    this.showAcceptedOrdersAccordions = false;
    this.showProcessingOrdersAccordions = false;
    this.showDeliveredOrdersAccordions = true;
    this.showRejectedOrdersAccordions = false;
  }

  toggleRejectedOrdersAccordions() {
    this.showAcceptedOrdersAccordions = false;
    this.showProcessingOrdersAccordions = false;
    this.showDeliveredOrdersAccordions = false;
    this.showRejectedOrdersAccordions = true;
  }

}
