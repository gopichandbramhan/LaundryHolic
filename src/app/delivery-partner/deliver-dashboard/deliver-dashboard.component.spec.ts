import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverDashboardComponent } from './deliver-dashboard.component';

describe('DeliverDashboardComponent', () => {
  let component: DeliverDashboardComponent;
  let fixture: ComponentFixture<DeliverDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverDashboardComponent]
    });
    fixture = TestBed.createComponent(DeliverDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
