import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashIronComponent } from './wash-iron.component';

describe('WashIronComponent', () => {
  let component: WashIronComponent;
  let fixture: ComponentFixture<WashIronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WashIronComponent]
    });
    fixture = TestBed.createComponent(WashIronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
