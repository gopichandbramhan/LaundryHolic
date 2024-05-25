import { Component } from '@angular/core';
import { DataService } from 'src/app/customer-partner/data.service';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css']
})
export class PrivacypolicyComponent {
  users: any;
  // data: any;
  constructor(private service: DataService) {
    service.fetchPrivacyPolicy().subscribe((data) => {
      this.users = data;
      console.log("data", data);
      console.log(this.users);
    });
  }
}
