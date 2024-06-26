import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import{ModuleHeaderComponent} from '../module-header/module-header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async() => {
   await TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        ModuleHeaderComponent
      ],
      
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

  });
  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
