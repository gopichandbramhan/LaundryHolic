import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverUseLaundryholicappComponent } from './deliver-use-laundryholicapp.component';

describe('DeliverUseLaundryholicappComponent', () => {
  let component: DeliverUseLaundryholicappComponent;
  let fixture: ComponentFixture<DeliverUseLaundryholicappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverUseLaundryholicappComponent]
    });
    fixture = TestBed.createComponent(DeliverUseLaundryholicappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
