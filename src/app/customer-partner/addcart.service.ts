import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {
  
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  private itemCountSubject = new BehaviorSubject<number>(0);
  itemCount$ = this.itemCountSubject.asObservable();

  constructor() { }

  updateCartCount(count: number): void {
    this.cartCountSubject.next(count);
  }

  updateItemCount(count: number): void {
    this.itemCountSubject.next(count);
  }
}