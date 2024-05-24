import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeLaundryComponent } from './shoe-laundry.component';

describe('ShoeLaundryComponent', () => {
  let component: ShoeLaundryComponent;
  let fixture: ComponentFixture<ShoeLaundryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoeLaundryComponent]
    });
    fixture = TestBed.createComponent(ShoeLaundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
