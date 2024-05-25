import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypolicyComponent } from './privacypolicy.component';
import { DataService } from 'src/app/customer-partner/data.service';
import { HttpClientModule } from '@angular/common/http';

describe('PrivacypolicyComponent', () => {
  let component: PrivacypolicyComponent;
  let fixture: ComponentFixture<PrivacypolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacypolicyComponent],
      imports:[HttpClientModule],
    });
    fixture = TestBed.createComponent(PrivacypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
