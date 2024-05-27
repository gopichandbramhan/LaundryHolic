import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-deliver-dashboard',
  templateUrl: './deliver-dashboard.component.html',
  styleUrls: ['./deliver-dashboard.component.css']
})
export class DeliverDashboardComponent {
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

  
  isChecked: boolean = false;

  constructor(private snackBar: MatSnackBar) {}

  toggleChecked(): void {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.openSnackBar('Your duty is On now');
    } else {
      this.openSnackBar('Your duty is Off now');
    }
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
    });
  }


  onToggleChange(event: any): void {
    if (event.target.checked) {
      Swal.fire({
        title: 'Your duty is on now',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } else {
      Swal.fire({
        title: 'Your duty is off now',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  }

}
