import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddcartService } from '../../addcart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 itemCount = 0;
  private itemCountSubscription: Subscription;

  constructor(private addcartService: AddcartService) {
    this.itemCountSubscription = this.addcartService.itemCount$.subscribe(count => {
      this.itemCount = count;
    });
  }

  ngOnDestroy(): void {
    this.itemCountSubscription.unsubscribe();
  }
}