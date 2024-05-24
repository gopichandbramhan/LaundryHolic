import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustMyorderComponent } from './cust-myorder.component';

describe('CustMyorderComponent', () => {
  let component: CustMyorderComponent;
  let fixture: ComponentFixture<CustMyorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustMyorderComponent]
    });
    fixture = TestBed.createComponent(CustMyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
