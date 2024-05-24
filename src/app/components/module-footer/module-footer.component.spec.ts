import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFooterComponent } from './module-footer.component';

describe('ModuleFooterComponent', () => {
  let component: ModuleFooterComponent;
  let fixture: ComponentFixture<ModuleFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleFooterComponent]
    });
    fixture = TestBed.createComponent(ModuleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
