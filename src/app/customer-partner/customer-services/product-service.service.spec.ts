import { TestBed } from '@angular/core/testing';
import { ProductServiceService } from './product-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductServiceService', () => {
  let service: ProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Import HttpClientTestingModule here
      providers: [ProductServiceService]
    });
    service = TestBed.inject(ProductServiceService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
})