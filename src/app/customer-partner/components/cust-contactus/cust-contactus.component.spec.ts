import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustContactusComponent } from './cust-contactus.component';

describe('CustContactusComponent', () => {
  let component: CustContactusComponent;
  let fixture: ComponentFixture<CustContactusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustContactusComponent]
    });
    fixture = TestBed.createComponent(CustContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
