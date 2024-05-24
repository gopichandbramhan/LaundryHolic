import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairingComponent } from './repairing.component';

describe('RepairingComponent', () => {
  let component: RepairingComponent;
  let fixture: ComponentFixture<RepairingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepairingComponent]
    });
    fixture = TestBed.createComponent(RepairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
