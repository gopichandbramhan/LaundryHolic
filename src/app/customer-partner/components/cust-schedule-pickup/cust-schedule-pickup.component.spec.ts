import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustSchedulePickupComponent } from './cust-schedule-pickup.component';

describe('CustSchedulePickupComponent', () => {
  let component: CustSchedulePickupComponent;
  let fixture: ComponentFixture<CustSchedulePickupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustSchedulePickupComponent]
    });
    fixture = TestBed.createComponent(CustSchedulePickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
