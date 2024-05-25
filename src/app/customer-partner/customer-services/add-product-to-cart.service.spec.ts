import { TestBed } from '@angular/core/testing';

import { AddProductToCartService } from './add-product-to-cart.service';

describe('AddProductToCartService', () => {
  let service: AddProductToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProductToCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
