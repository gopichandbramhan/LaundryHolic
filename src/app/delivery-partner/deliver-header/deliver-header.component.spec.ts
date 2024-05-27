import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DeliverHeaderComponent } from './deliver-header.component';

describe('DeliverHeaderComponent', () => {
  let component: DeliverHeaderComponent;
  let fixture: ComponentFixture<DeliverHeaderComponent>;

  beforeEach(async() => {
   await TestBed.configureTestingModule({
      declarations: [DeliverHeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
   
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
