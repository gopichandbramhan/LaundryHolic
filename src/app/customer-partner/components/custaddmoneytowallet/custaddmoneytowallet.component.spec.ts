import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustaddmoneytowalletComponent } from './custaddmoneytowallet.component';

describe('CustaddmoneytowalletComponent', () => {
  let component: CustaddmoneytowalletComponent;
  let fixture: ComponentFixture<CustaddmoneytowalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustaddmoneytowalletComponent]
    });
    fixture = TestBed.createComponent(CustaddmoneytowalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
