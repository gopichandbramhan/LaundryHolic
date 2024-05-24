import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-statement',
  templateUrl: './request-statement.component.html',
  styleUrls: ['./request-statement.component.css']
})
export class RequestStatementComponent {
  requestStatementForm = new FormGroup({
    category : new FormControl('', [Validators.required]),
    startdate : new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    enddate :  new FormControl('', [Validators.required]),

   })
    handleSubmit(){
      console.log(this.requestStatementForm.value)
    }
    get f(){
      return this.requestStatementForm.controls;
    }

constructor(private router: Router){}

  goBack(): void {
    this.router.navigate(['/bussiness/wallet']);
  }

  openDialog(): void {

  }

  selectedTimePeriod: string = '';

  inputvalue: string = '';
  validate() {
  
    // if (this.inputvalue == '') {
    //   Swal.fire({
    //     title: 'Email is required!',
    //     icon: 'warning',
    //     confirmButtonText: 'OK',
    //   });
    // } else {
    //   Swal.fire({
    //     title: 'Wallet statement request sent successfully. You will receive a statement within 24 hours.',
    //     icon: 'success',
    //     confirmButtonText: 'OK',
    //   });
    // }
  }
}