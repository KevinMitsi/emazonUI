import { TestBed } from '@angular/core/testing';
import { ApiCategoryService } from '../../../../src/app/shared/services/stock/api-category-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Category } from '../../../../src/app/shared/model/category.model';
import { Page } from '../../../../src/app/shared/model/page.model';

describe('ApiCategoryService', () => {
  let service: ApiCategoryService;
  let httpMock: HttpTestingController;

  const mockCategories: Page<Category> = {
    content: [
      { id: 1, name: 'Category 1', description: 'Description 1' },
      { id: 2, name: 'Category 2', description: 'Description 2' }
    ],
    totalPages: 1,
    totalElements: 2,
    size: 2,
    last: true,
    number: 0,
    sort: 'asc',
    first: true,
    empty: false
  };

  const newCategory: Category = {
    id: 3,
    name: 'Category 3',
    description: 'Description 3'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiCategoryService]
    });
    service = TestBed.inject(ApiCategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should fetch categories (getCategories)', () => {
    service.getCategories().subscribe((categories) => {
      expect(categories).toEqual(mockCategories);
    });

    const req = httpMock.expectOne('http://localhost:8082/api/v1/category/getAll');
    expect(req.request.method).toBe('GET');
    req.flush(mockCategories);
  });

  test('should create a new category (postCategory)', () => {
    service.postCategory(newCategory).subscribe((category) => {
      expect(category).toEqual(newCategory);
    });

    const req = httpMock.expectOne('http://localhost:8082/api/v1/category/new');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newCategory);
    req.flush(newCategory);
  });
});
