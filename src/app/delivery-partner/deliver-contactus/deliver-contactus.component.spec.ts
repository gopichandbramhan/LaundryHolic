import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverContactusComponent } from './deliver-contactus.component';

describe('DeliverContactusComponent', () => {
  let component: DeliverContactusComponent;
  let fixture: ComponentFixture<DeliverContactusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverContactusComponent]
    });
    fixture = TestBed.createComponent(DeliverContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
