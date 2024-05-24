import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterationComponent } from './alteration.component';

describe('AlterationComponent', () => {
  let component: AlterationComponent;
  let fixture: ComponentFixture<AlterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterationComponent]
    });
    fixture = TestBed.createComponent(AlterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
