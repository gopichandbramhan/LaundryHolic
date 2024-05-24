import { Component } from '@angular/core';

@Component({
  selector: 'app-cust-nearbystore',
  templateUrl: './cust-nearbystore.component.html',
  styleUrls: ['./cust-nearbystore.component.css']
})
export class CustNearbystoreComponent {
  showFiveKm: boolean = true;
  showTenKm: boolean = false;
  showFifteenKm: boolean = false;
  showTwentyKm: boolean = false;
  showTwentyFiveKm: boolean = false;
  showThirtyKm: boolean = false;
  showThirtyFiveKm: boolean = false;
  showFourtyKm: boolean = false;

  fiveKm() {
    this.showFiveKm = true;
    this.showTenKm = false;
    this.showFifteenKm = false;
    this.showTwentyKm = false;
    this.showTwentyFiveKm = false;
    this.showThirtyKm = false;
    this.showThirtyFiveKm = false;
    this.showFourtyKm = false;
  }
  tenKm() {
    this.showFiveKm = true;
    this.showTenKm = false;
    this.showFifteenKm = false;
    this.showTwentyKm = false;
    this.showTwentyFiveKm = false;
    this.showThirtyKm = false;
    this.showThirtyFiveKm = false;
    this.showFourtyKm = false;
  }
  fifteenKm() {
    this.showFiveKm = true;
    this.showTenKm = true;
    this.showFifteenKm = false;
    this.showTwentyKm = false;
    this.showTwentyFiveKm = false;
    this.showThirtyKm = false;
    this.showThirtyFiveKm = false;
    this.showFourtyKm = false;
  }
  twentyKm() {
    this.showFiveKm = true;
    this.showTenKm = true;
    this.showFifteenKm = true;
    this.showTwentyKm = true;
    this.showTwentyFiveKm = false;
    this.showThirtyKm = false;
    this.showThirtyFiveKm = false;
    this.showFourtyKm = false;
  }
  twentyFiveKm() {
    this.showFiveKm = true;
    this.showTenKm = true;
    this.showFifteenKm = true;
    this.showTwentyKm = true;
    this.showTwentyFiveKm = true;
    this.showThirtyKm = false;
    this.showThirtyFiveKm = false;
    this.showFourtyKm = false;
  }
  thirtyKm() {
    this.showFiveKm = true;
    this.showTenKm = true;
    this.showFifteenKm = true;
    this.showTwentyKm = true;
    this.showTwentyFiveKm = true;
    this.showThirtyKm = true;
    this.showThirtyFiveKm = false;
    this.showFourtyKm = false;
  }
  thirtyFiveKm() {
    this.showFiveKm = true;
    this.showTenKm = true;
    this.showFifteenKm = true;
    this.showTwentyKm = true;
    this.showTwentyFiveKm = true;
    this.showThirtyKm = true;
    this.showThirtyFiveKm = true;
    this.showFourtyKm = false;
  }
  fourtyKm() {
    this.showFiveKm = true;
    this.showTenKm = true;
    this.showFifteenKm = true;
    this.showTwentyKm = true;
    this.showTwentyFiveKm = true;
    this.showThirtyKm = true;
    this.showThirtyFiveKm = true;
    this.showFourtyKm = true;
  }
}
