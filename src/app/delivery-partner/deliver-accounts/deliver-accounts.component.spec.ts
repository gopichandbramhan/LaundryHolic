import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverAccountsComponent } from './deliver-accounts.component';

describe('DeliverAccountsComponent', () => {
  let component: DeliverAccountsComponent;
  let fixture: ComponentFixture<DeliverAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverAccountsComponent]
    });
    fixture = TestBed.createComponent(DeliverAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
