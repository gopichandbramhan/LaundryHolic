import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustMyaccountComponent } from './cust-myaccount.component';

describe('CustMyaccountComponent', () => {
  let component: CustMyaccountComponent;
  let fixture: ComponentFixture<CustMyaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustMyaccountComponent]
    });
    fixture = TestBed.createComponent(CustMyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
