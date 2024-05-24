import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverNeworderComponent } from './deliver-neworder.component';

describe('DeliverNeworderComponent', () => {
  let component: DeliverNeworderComponent;
  let fixture: ComponentFixture<DeliverNeworderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverNeworderComponent]
    });
    fixture = TestBed.createComponent(DeliverNeworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
