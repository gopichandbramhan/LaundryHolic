import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustTrackorderComponent } from './cust-trackorder.component';

describe('CustTrackorderComponent', () => {
  let component: CustTrackorderComponent;
  let fixture: ComponentFixture<CustTrackorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustTrackorderComponent]
    });
    fixture = TestBed.createComponent(CustTrackorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
