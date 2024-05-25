import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MyOrderComponent } from './my-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MyOrderComponent', () => {
  let component: MyOrderComponent;
  let fixture: ComponentFixture<MyOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrderComponent],
      imports: [MatExpansionModule,BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(MyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MyOrderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
