import { Component } from '@angular/core';
import Swal from 'sweetalert2';

interface Service {
  name: string;
  price: number;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  onDeleteClicked() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!, Your file has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your file is safe :)', 'error');
      }
    });
  }

  //search
  searchText: string = '';
  services: Service[] = [
    { name: 'Anarkali Suit-Heavy', price: 40.00 },
    { name: 'Blouse Heavy', price: 50.00 },
  ];
  filteredServices: Service[] = [];

  constructor() {
    this.filteredServices = this.services;
  }

  filterServices() {
    this.filteredServices = this.services.filter(service =>
      service.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  //selectall
  selectAllChecked: boolean = false;
  checkboxStates: boolean[] = [false, false];

  toggleSelectAll(): void {
    this.checkboxStates = this.checkboxStates.map(() => this.selectAllChecked);
  }
}
