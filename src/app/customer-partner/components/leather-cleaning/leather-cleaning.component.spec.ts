import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeatherCleaningComponent } from './leather-cleaning.component';

describe('LeatherCleaningComponent', () => {
  let component: LeatherCleaningComponent;
  let fixture: ComponentFixture<LeatherCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeatherCleaningComponent]
    });
    fixture = TestBed.createComponent(LeatherCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
