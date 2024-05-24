import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustFooterComponent } from './cust-footer.component';

describe('CustFooterComponent', () => {
  let component: CustFooterComponent;
  let fixture: ComponentFixture<CustFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustFooterComponent]
    });
    fixture = TestBed.createComponent(CustFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
