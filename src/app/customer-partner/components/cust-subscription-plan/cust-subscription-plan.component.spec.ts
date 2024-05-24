import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustSubscriptionPlanComponent } from './cust-subscription-plan.component';

describe('CustSubscriptionPlanComponent', () => {
  let component: CustSubscriptionPlanComponent;
  let fixture: ComponentFixture<CustSubscriptionPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustSubscriptionPlanComponent]
    });
    fixture = TestBed.createComponent(CustSubscriptionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
