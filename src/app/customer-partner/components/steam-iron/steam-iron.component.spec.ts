import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamIronComponent } from './steam-iron.component';

describe('SteamIronComponent', () => {
  let component: SteamIronComponent;
  let fixture: ComponentFixture<SteamIronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SteamIronComponent]
    });
    fixture = TestBed.createComponent(SteamIronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
