import { TestBed } from '@angular/core/testing';

import { ApiCategoryService } from './api-category-service.service';

describe('ApiCategoryServiceService', () => {
  let service: ApiCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
