import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustNearbystoreComponent } from './cust-nearbystore.component';

describe('CustNearbystoreComponent', () => {
  let component: CustNearbystoreComponent;
  let fixture: ComponentFixture<CustNearbystoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustNearbystoreComponent]
    });
    fixture = TestBed.createComponent(CustNearbystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
