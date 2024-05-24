
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent{
  
  constructor(private router: Router) {}
  goTodrycleanPage() {
    this.router.navigate(['/customer/cust_dryclean']);
  }

  goToSteamIronPage() {
    this.router.navigate(['/customer/steam_iron']);
  }

  goToHomeCleaning() {
    this.router.navigate(['/customer/home_cleaning']);
  }

  goToPetLaundry() {
    this.router.navigate(['/customer/pet_laundry']);
  }

  goToShoeLaundry() {
    this.router.navigate(['/customer/shoe_laundry']);
  }

  goToWashIronPage() {
    this.router.navigate(['/customer/wash_iron']);
  }

  goToRepairingPage() {
    this.router.navigate(['/customer/repairing']);
  }

  goToDyeing() {
    this.router.navigate(['/customer/dyeing']);
  }

  goToAlterationPage() {
    this.router.navigate(['/customer/alteration']);
  }

  goToCleaningPage() {
    this.router.navigate(['/customer/cleaning']);
  }

}