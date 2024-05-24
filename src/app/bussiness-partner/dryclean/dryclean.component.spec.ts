import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrycleanComponent } from './dryclean.component';

describe('DrycleanComponent', () => {
  let component: DrycleanComponent;
  let fixture: ComponentFixture<DrycleanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrycleanComponent]
    });
    fixture = TestBed.createComponent(DrycleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
