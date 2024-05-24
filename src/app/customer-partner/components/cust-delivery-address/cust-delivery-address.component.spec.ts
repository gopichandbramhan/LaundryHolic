import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDeliveryAddressComponent } from './cust-delivery-address.component';

describe('CustDeliveryAddressComponent', () => {
  let component: CustDeliveryAddressComponent;
  let fixture: ComponentFixture<CustDeliveryAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustDeliveryAddressComponent]
    });
    fixture = TestBed.createComponent(CustDeliveryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
