import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustChatboxComponent } from './cust-chatbox.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

describe('CustChatboxComponent', () => {
  let component: CustChatboxComponent;
  let fixture: ComponentFixture<CustChatboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustChatboxComponent],
      imports: [
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(CustChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
