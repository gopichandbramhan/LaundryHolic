import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverEditProfileComponent } from './deliver-edit-profile.component';

describe('DeliverEditProfileComponent', () => {
  let component: DeliverEditProfileComponent;
  let fixture: ComponentFixture<DeliverEditProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverEditProfileComponent]
    });
    fixture = TestBed.createComponent(DeliverEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
