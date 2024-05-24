import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/myservices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mob_no:string='';
  otp:string='';
  user:string = '';
  loginForm: any;

  constructor(private router:Router, private authService: AuthService){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      number :  new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      otp: new FormControl('', [Validators.required]),
      select: new FormControl('', [Validators.required]),
     });
     
   }
   get f(){
    return this.loginForm.controls;
  }

  // user_type(event:any){
  //   this.user = event.target.value;
  // }

  // login(){debugger
  //   if(this.mob_no == '7083231565' && this.otp == '12345'){
  //       if(this.user == 'Delivery Person'){
  //           this.router.navigateByUrl('/delivery')
  //       }else if(this.user == 'Bussiness Partner'){
  //          this.router.navigateByUrl('/bussiness')
  //       }else{
  //          this.router.navigateByUrl('/customer')
  //       }
  //   }
  // }

  onLogin() {
    if (this.loginForm.valid){
      console.log(this.loginForm.value)
      this.authService.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.loginForm.reset();
          this.router.navigateByUrl('/home')
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }
  }

}