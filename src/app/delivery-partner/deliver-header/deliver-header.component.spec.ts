import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverHeaderComponent } from './deliver-header.component';

describe('DeliverHeaderComponent', () => {
  let component: DeliverHeaderComponent;
  let fixture: ComponentFixture<DeliverHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverHeaderComponent]
    });
    fixture = TestBed.createComponent(DeliverHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
