import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustSchedulePickupComponent } from './cust-schedule-pickup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CustSchedulePickupComponent', () => {
  let component: CustSchedulePickupComponent;
  let fixture: ComponentFixture<CustSchedulePickupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustSchedulePickupComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(CustSchedulePickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
