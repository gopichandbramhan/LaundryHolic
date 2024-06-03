import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string="https://laundryholic.com/laundryholic/webapi/"

  constructor(private http: HttpClient) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}F-Register-Vendor.php`, userObj);

  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}login_api.php`,loginObj);
  }

  // getStates(){
  //   return this.http.get('${this.baseUrl}F-State-List.php')
  // }

  // getCity(state_id){
  //   return this.http.get('${this.baseUrl}F-State-Wise-City.php/?state_id=${state_id}')
  // }
 }
