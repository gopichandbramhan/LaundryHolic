import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestStatementComponent } from './request-statement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RequestStatementComponent', () => {
  let component: RequestStatementComponent;
  let fixture: ComponentFixture<RequestStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestStatementComponent],
      imports: [
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(RequestStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
