import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = 'task';
  signUpForm = new FormGroup({
  firstName : new FormControl('', [Validators.required]),
  lastName : new FormControl('', [Validators.required]),
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
