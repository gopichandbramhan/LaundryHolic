// addtocart.component.ts
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Location } from '@angular/common';
// import { DataService } from '../../data.service';

// interface Product {
//   sr_no: number;
//   productname: string;
//   productimage: string;
//   description: string;
//   price: number;
//   Quantity: number;
//   Totalamount: number;
// }

// @Component({
//   selector: 'app-addtocart',
//   templateUrl: './addtocart.component.html',
//   styleUrls: ['./addtocart.component.css']

// })
// export class AddtocartComponent implements OnInit {
//   productdatatablecolums: string[] = ['sr_no', 'productname', 'productimage', 'description', 'price', 'Quantity', 'Totalamount', 'Action'];
//   changecolor: boolean = false;
//   productData: Product[] = [];
//   totalAmount: number = 0;
//   i!: number;
//   showEmptyContainer: boolean | undefined;

//   constructor(private dataService: DataService, private router: Router, private location: Location) { }

//   ngOnInit(): void {

//     this.dataService.productDataSubject.subscribe(data => {
//       this.productData = data;
//       this.calculateTotalAmount();

//     });

//   }

//   calculateTotalAmount() {
//     this.totalAmount = this.productData.reduce((total, item) => total + item.Totalamount, 0);
//   }

//   deleteItem(product: Product) {
//     const index = this.productData.indexOf(product);
//     if (index !== -1) {
//       this.productData.splice(index, 1);
//       this.calculateTotalAmount();
//     }
//   }


//   goTodrycleanPage() {
//     this.router.navigate(['/customer/cust-dryclean']);
//   }

//   // addtocart/cust_schedule_pickup

//   emptyCart() {
//     this.productData = [];
//     this.showEmptyContainer = true;
//   }

//   goBack() {
//     this.router.navigate(['']);
//   }
// }



// addtocart.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  sr_no: number;
  productname: string;
  productimage: string;
  description: string;
  price: number;
  Quantity: number;
  Totalamount: number;
}

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']

})
export class AddtocartComponent {

  constructor(private router: Router){}

  gotoSchedulePickup() {
    this.router.navigate(['/customer/addtocart/cust_schedule_pickup'])
  }
   value = 0;
   selingPrice = 50;
  estimatePrice = 0;
  decrementValue() {
    if(this.value > 0){
      this.value--;
      this.estimatePrice = this.selingPrice * this.value;
    }
  }
  increment() {
    this.value++;
    this.estimatePrice = this.selingPrice * this.value;
  }
 
}
