import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverMyorderComponent } from './deliver-myorder.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

describe('DeliverMyorderComponent', () => {
  let component: DeliverMyorderComponent;
  let fixture: ComponentFixture<DeliverMyorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverMyorderComponent],
      imports: [
        MatExpansionModule,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(DeliverMyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
