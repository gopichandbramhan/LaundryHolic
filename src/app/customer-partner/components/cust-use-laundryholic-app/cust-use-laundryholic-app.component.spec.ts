import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustUseLaundryholicAppComponent } from './cust-use-laundryholic-app.component';

describe('CustUseLaundryholicAppComponent', () => {
  let component: CustUseLaundryholicAppComponent;
  let fixture: ComponentFixture<CustUseLaundryholicAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustUseLaundryholicAppComponent]
    });
    fixture = TestBed.createComponent(CustUseLaundryholicAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
