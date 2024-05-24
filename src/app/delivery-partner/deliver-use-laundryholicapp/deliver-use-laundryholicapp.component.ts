import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliver-use-laundryholicapp',
  templateUrl: './deliver-use-laundryholicapp.component.html',
  styleUrls: ['./deliver-use-laundryholicapp.component.css']
})
export class DeliverUseLaundryholicappComponent {
  constructor(private router: Router){}
  goBack() {
    this.router.navigate(['/delivery/deliver_accounts']);
  }
}
