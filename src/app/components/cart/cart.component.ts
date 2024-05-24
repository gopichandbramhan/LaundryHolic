import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products:any=[];
  public grandTotal:number=0;

  constructor(){}

  ngOnInit():void{

  }

  
}
