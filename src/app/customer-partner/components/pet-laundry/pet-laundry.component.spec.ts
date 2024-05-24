import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetLaundryComponent } from './pet-laundry.component';

describe('PetLaundryComponent', () => {
  let component: PetLaundryComponent;
  let fixture: ComponentFixture<PetLaundryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetLaundryComponent]
    });
    fixture = TestBed.createComponent(PetLaundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
