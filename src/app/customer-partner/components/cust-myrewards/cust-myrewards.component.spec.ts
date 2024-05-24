import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustMyrewardsComponent } from './cust-myrewards.component';

describe('CustMyrewardsComponent', () => {
  let component: CustMyrewardsComponent;
  let fixture: ComponentFixture<CustMyrewardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustMyrewardsComponent]
    });
    fixture = TestBed.createComponent(CustMyrewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
