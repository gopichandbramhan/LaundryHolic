import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCleaningComponent } from './home-cleaning.component';

describe('HomeCleaningComponent', () => {
  let component: HomeCleaningComponent;
  let fixture: ComponentFixture<HomeCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCleaningComponent]
    });
    fixture = TestBed.createComponent(HomeCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
