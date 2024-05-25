import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatStepperModule } from '@angular/material/stepper';
import { CustTrackorderComponent } from './cust-trackorder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CustTrackorderComponent', () => {
  let component: CustTrackorderComponent;
  let fixture: ComponentFixture<CustTrackorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustTrackorderComponent],
      imports: [MatStepperModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(CustTrackorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
