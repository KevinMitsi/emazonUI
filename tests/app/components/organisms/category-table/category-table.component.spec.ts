import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTableComponent } from '../../../../../src/app/components/organisms/category-table/category-table.component';

describe('CategoryTableComponent', () => {
  let component: CategoryTableComponent;
  let fixture: ComponentFixture<CategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
