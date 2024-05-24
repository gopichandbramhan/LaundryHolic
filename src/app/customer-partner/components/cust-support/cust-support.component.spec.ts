import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustSupportComponent } from './cust-support.component';

describe('CustSupportComponent', () => {
  let component: CustSupportComponent;
  let fixture: ComponentFixture<CustSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustSupportComponent]
    });
    fixture = TestBed.createComponent(CustSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
