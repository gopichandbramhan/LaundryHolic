import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-editprofile',
  templateUrl: './cust-editprofile.component.html',
  styleUrls: ['./cust-editprofile.component.css']
})
export class CustEditprofileComponent {
  imageUrl: string = 'assets/Images/edit.jpg';

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

  myForm: FormGroup = new FormGroup({});
  submittedData: any;
  isFormVisible: boolean = true;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      storeaddress: ['', Validators.required]
    });
  }
  @ViewChild('myFieldInput') myFieldInput!: ElementRef;

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

  goBack() {
    this.router.navigate(['/customer/myaccount']);
  }
}
