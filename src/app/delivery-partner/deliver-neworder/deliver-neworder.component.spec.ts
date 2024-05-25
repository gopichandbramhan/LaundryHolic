import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverNeworderComponent } from './deliver-neworder.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DeliverNeworderComponent', () => {
  let component: DeliverNeworderComponent;
  let fixture: ComponentFixture<DeliverNeworderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverNeworderComponent],
      imports: [
        MatExpansionModule,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(DeliverNeworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
