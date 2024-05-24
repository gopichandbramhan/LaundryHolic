import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deliver-neworder',
  templateUrl: './deliver-neworder.component.html',
  styleUrls: ['./deliver-neworder.component.css']
})
export class DeliverNeworderComponent {

  onDeleteClicked() {
    Swal.fire({
      title: 'Enter reason for rejection',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      inputValidator: (value) => {
        if (!value) {
          return 'You need to enter a reason!';
        } else {
          return null; // Return null if validation passes
        }
      }

    }).then((result) => {
      if (result.isConfirmed) {
        // Process rejection here
        Swal.fire(
          'Rejected!',
          'Your order has been rejected with reason: ' + result.value,
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your order is safe :)',
          'error'
        );
      }
    });
  }



}
