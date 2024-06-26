import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalRequestComponent } from './withdrawal-request.component';
import { FormsModule } from '@angular/forms';

describe('WithdrawalRequestComponent', () => {
  let component: WithdrawalRequestComponent;
  let fixture: ComponentFixture<WithdrawalRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawalRequestComponent],
      imports: [
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(WithdrawalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
