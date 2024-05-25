import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustMyorderComponent } from './cust-myorder.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CustMyorderComponent', () => {
  let component: CustMyorderComponent;
  let fixture: ComponentFixture<CustMyorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustMyorderComponent],
      imports: [
        NoopAnimationsModule,
        MatExpansionModule
      ]
    });
    fixture = TestBed.createComponent(CustMyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
