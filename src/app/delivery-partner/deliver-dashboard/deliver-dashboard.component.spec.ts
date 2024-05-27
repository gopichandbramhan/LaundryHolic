import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeliverDashboardComponent } from './deliver-dashboard.component';

describe('DeliverDashboardComponent', () => {
  let component: DeliverDashboardComponent;
  let fixture: ComponentFixture<DeliverDashboardComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [DeliverDashboardComponent],
      imports: [
        MatSnackBarModule,
        NoopAnimationsModule 
      ],
      providers: [
        MatSnackBar
      ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DeliverDashboardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
