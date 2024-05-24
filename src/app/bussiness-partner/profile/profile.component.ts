import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  myForm: FormGroup = new FormGroup({});
  submittedData: any;
  isFormVisible: boolean = true;
  imageUrl: string = 'assets/Images/edit-3-svgrepo-com.png'; // Default image path
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      photo: ['', Validators.required],
      dob: ['', Validators.required],
      mob: [''],
      city: [''],
      state: [''],
      fullname: [''],
      email: [''],
      bankname: ['', Validators.required],
      accountholdername: ['', Validators.required],
      accountnumber: ['', Validators.required],
      ifsccode: ['', Validators.required],
      storename: ['', Validators.required],
      pancard: [''],
      registrationplan: ['', Validators.required],
      commision: ['', Validators.required],
      storeaddress: ['', Validators.required],
      gumasta: [''],
      gstnumber: [''],
      paymentmethod: ['', Validators.required],
      Chequenumber: ['']
    });
  }
  @ViewChild('myFieldInput') myFieldInput!: ElementRef;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.submittedData = this.myForm.value;
    }
    this.isFormVisible = false;
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.myForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  isFormValid(): boolean {
    return this.myForm.valid;
  }


  selectedregistrationPlan: string = '';
  selectedTimePeriod: string = '';


}