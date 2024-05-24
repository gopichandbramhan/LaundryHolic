import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliver-edit-profile',
  templateUrl: './deliver-edit-profile.component.html',
  styleUrls: ['./deliver-edit-profile.component.css']
})
export class DeliverEditProfileComponent {
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
      address: ['', Validators.required],
      dob: ['', Validators.required],
      bankName: ['', Validators.required],
      accountHolderName: ['', Validators.required],
      accountNo: ['', Validators.required],
      ifscCode: ['', Validators.required],
      aadharNo: ['', Validators.required],
      panCard: ['', Validators.required],
      drivingLicenceNo: ['', Validators.required],
      vehicleModelName: ['', Validators.required],
      vehicleNo: ['', Validators.required],
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
    this.router.navigate(['/delivery/deliver_accounts']);
  }
}
