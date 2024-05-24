import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  privacyPolicySections: any[] = [];

  constructor(private http: HttpClient) { }
  url = 'https://laundryholic.com/laundryholic/webapi/F-Privacy-Policy.php';
  
  ngOnInit(): void {
    this.fetchPrivacyPolicy();
  }

  fetchPrivacyPolicy() {
   return this.http.get(this.url);
  }
  
  public cartItemList: any = [];
  public productDataSubject = new BehaviorSubject<any>([]);

  setProductData(data: any[]) {
    this.productDataSubject.next(data);
  }


  
}