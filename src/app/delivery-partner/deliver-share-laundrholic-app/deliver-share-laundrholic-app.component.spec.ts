import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverShareLaundrholicAppComponent } from './deliver-share-laundrholic-app.component';

describe('DeliverShareLaundrholicAppComponent', () => {
  let component: DeliverShareLaundrholicAppComponent;
  let fixture: ComponentFixture<DeliverShareLaundrholicAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverShareLaundrholicAppComponent]
    });
    fixture = TestBed.createComponent(DeliverShareLaundrholicAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
