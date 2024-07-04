import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/myservices/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  showDiv1: boolean = true;
  showDiv2: boolean = false;
  showDiv3: boolean = false;
  signUpForm: any;

  constructor(private authService: AuthService, private router:Router){}

  toggleDiv(divNumber: number) {
    this.showDiv1 = divNumber === 1;
    this.showDiv2 = divNumber === 2;
    this.showDiv3 = divNumber === 3;
  }

 ngOnInit() {
  this.signUpForm = new FormGroup({
    Name : new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number :  new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
   });
 }
 get f(){
  return this.signUpForm.controls;
}

onSignup(){
  if(this.signUpForm.valid){
    this.authService.signUp(this.signUpForm.value)
    .subscribe({
      next:(res=>{
        alert(res.message);
        this.signUpForm.reset();
      }),
      error:(err=>{
        alert(err?.error.message)
        this.router.navigateByUrl('/login')
      })
    })
    console.log(this.signUpForm.value)
  }
}


}