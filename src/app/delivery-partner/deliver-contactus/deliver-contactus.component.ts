import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliver-contactus',
  templateUrl: './deliver-contactus.component.html',
  styleUrls: ['./deliver-contactus.component.css']
})
export class DeliverContactusComponent {
  constructor(private router: Router) { }
  goBack() {
    this.router.navigate(['/delivery/deliver_accounts']);
  }
}
