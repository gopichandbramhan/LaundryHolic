import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private http: HttpClient) { }

  gotoDryClean() {
    this.router.navigate(['/customer/cust_dryclean']);
  }

  gotoSteamIron() {
    this.router.navigate(['/customer/steam_iron']);
  }

  gotoHomeLaundry() {
    this.router.navigate(['/customer/home_cleaning']);
  }

  gotoPetLaundry() {
    this.router.navigate(['/customer/pet_laundry']);
  }

  gotoCarpetCleaning() {
    this.router.navigate(['/customer/carpet_cleaning']);
  }

  gotoWashIron() {
    this.router.navigate(['/customer/wash_iron']);
  }

  gotoShoeLaundry() {
    this.router.navigate(['/customer/shoe_laundry']);
  }

  gotoLeatherCleaning() {
    this.router.navigate(['/customer/leather_cleaning']);
  }

  banners: any[] = [];
  state: string = "Maharashtra";
  city: string = "bhandara";


  ngOnInit(): void {
    this.fetchBanners();
  }

  fetchBanners(): void {
    const url = 'https://laundryholic.com/laundryholic/webapi/F-Banner-Images.php';
    const data = {
      State: this.state,
      City: this.city
    };

    this.http.post<any[]>(url, data)
      .subscribe(
        (response) => {
          this.banners = response.map(item => ({
            imageUrl: 'https://laundryholic.com/laundryholic/' + item.imagepath,
            altText: item.description
          }));
          console.log('Banners:', this.banners);
        },
        (error) => {
          console.error('Error fetching banners:', error);
        }
      );
    }
}
