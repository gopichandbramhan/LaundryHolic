import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  redirectToPlayStore(): void {
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=<your_package_name>';
    window.location.href = playStoreUrl;
  }

  constructor(private router: Router) {}
  
  gotoPrivacyPolicy(){
    this.router.navigate(['/customer/privacypolicy'])
  }

  gotoHome(){
    this.router.navigate(['home'])
  }

  goToServicePage() {
    this.router.navigate(['service']);
  }

  gotoContact(){
    this.router.navigate(['contact']);
  }

  gotoTermsAndConditionsCustPage(){
    this.router.navigate(['/customer/terms&conditions']);
  }
  gotoTermsAndConditionsVendeorPage(){
    this.router.navigate(['/bussiness/terms&conditions'])
  }

  openWhatsApp() {
    const whatsappUrl = `https://wa.me`;
    window.open(whatsappUrl, '_blank');
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log(text);
    }, error => {
      console.error('Could not copy text: ', error);
    });
  }

  signUpForm = new FormGroup({
    fullname : new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number :  new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    text :  new FormControl('', [Validators.required]),
   })
    handleSubmit(){
      console.log(this.signUpForm.value)
    }
    get f(){
      return this.signUpForm.controls;
    }
}
