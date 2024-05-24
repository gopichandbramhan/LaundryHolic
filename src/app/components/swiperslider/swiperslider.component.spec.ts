import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipersliderComponent } from './swiperslider.component';

describe('SwipersliderComponent', () => {
  let component: SwipersliderComponent;
  let fixture: ComponentFixture<SwipersliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwipersliderComponent]
    });
    fixture = TestBed.createComponent(SwipersliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
