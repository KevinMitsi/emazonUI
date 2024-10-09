import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTableTemplateComponent } from './category-table-template.component';

describe('CategoryTableTemplateComponent', () => {
  let component: CategoryTableTemplateComponent;
  let fixture: ComponentFixture<CategoryTableTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTableTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryTableTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
