import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustChatboxComponent } from './cust-chatbox.component';

describe('CustChatboxComponent', () => {
  let component: CustChatboxComponent;
  let fixture: ComponentFixture<CustChatboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustChatboxComponent]
    });
    fixture = TestBed.createComponent(CustChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
