import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { AddcartService } from '../../addcart.service';


interface Product {
  sr_no: number;
  productname: string;
  productimage: any;
  description: string;
  price: string;
  Quantity: number;
  Totalamount: number;
  Action: string;
}
@Component({
  selector: 'app-dryclean1',
  templateUrl: './dryclean1.component.html',
  styleUrls: ['./dryclean1.component.css']
})

export class Dryclean1Component {
  productData: Product[] = [
    {
      sr_no: 1,
      productname: 'Apron',
      productimage: '../../../assets/Images/dry cleaning.png',
      description: 'we take pride in offering a dry cleaning experience that goes beyond the ordinary. Step into the world of garment care where precision, expertise, and attention to detail converge to elevate your wardrobe.',
      price: '120.00',
      Quantity: 1,
      Totalamount: 0,
      Action: ''
    }, {
      sr_no: 2,
      productname: 'Blazer',
      productimage: '/assets/Images/apron.png',
      description: 'we take pride in offering a dry cleaning experience that goes beyond the ordinary. Step into the world of garment care where precision, expertise, and attention to detail converge to elevate your wardrobe.',
      price: '150.00',
      Quantity: 1,
      Totalamount: 0,
      Action: ''
    },
    {
      sr_no: 3,
      productname: 'Blaouse',
      productimage: '/assets/Images/apron.png',
      description: 'we take pride in offering a dry cleaning experience that goes beyond the ordinary. Step into the world of garment care where precision, expertise, and attention to detail converge to elevate your wardrobe.',
      price: '150.00',
      Quantity: 1,
      Totalamount: 0,
      Action: ''
    }
  ];
  
  quantity: any = 0;
  itemCount:any=0;
  

  constructor(private router: Router, private dataService: DataService, private addcartService: AddcartService) { }

  addToCart(product: Product) {
    const existingProductIndex = this.dataService.cartItemList.findIndex((item: Product) => item.productname === product.productname);

  
    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update its quantity
      this.dataService.cartItemList[existingProductIndex].Quantity += this.quantity;
      this.dataService.cartItemList[existingProductIndex].Totalamount = parseFloat(product.price) * this.dataService.cartItemList[existingProductIndex].Quantity;
    } else {
      // Product does not exist in the cart, add it
      product.Quantity = this.quantity;
      product.Totalamount = parseFloat(product.price) * this.quantity;
      this.dataService.cartItemList.push(product);
    }
  
    this.itemCount += this.quantity;
    this.addcartService.updateItemCount(this.itemCount);
    this.dataService.setProductData(this.dataService.cartItemList);
    this.quantity = 0; 
  }
  

  plus() {
    if (this.quantity < 5) {
      this.quantity += 1;
      
    }
  }

  minus() {
    if (this.quantity > 0) {
      this.quantity -= 1;
       
    }
  }


  
}