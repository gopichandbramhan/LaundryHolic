import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustEditprofileComponent } from './cust-editprofile.component';

describe('CustEditprofileComponent', () => {
  let component: CustEditprofileComponent;
  let fixture: ComponentFixture<CustEditprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustEditprofileComponent]
    });
    fixture = TestBed.createComponent(CustEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
