import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCategoryFormComponent } from '../../../../../src/app/components/organisms/add-category-form/add-category-form.component';

describe('AddCategoryFormComponent', () => {
  let component: AddCategoryFormComponent;
  let fixture: ComponentFixture<AddCategoryFormComponent>;

  beforeEach(() => {
    
    fixture = TestBed.createComponent(AddCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AddCategoryFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form on ngOnInit', () => {
    component.ngOnInit();
    expect(component.addCategoryForm).toBeDefined();
    expect(component.addCategoryForm.get('categoryName')).toBeTruthy();
    expect(component.addCategoryForm.get('description')).toBeTruthy();
  });

  it('should validate hasError method', () => {
    component.ngOnInit();
    component.addCategoryForm.get('categoryName')?.setErrors({ required: true });
    expect(component.hasError('categoryName', 'required')).toBeTruthy();
  });

  it('should display failed window on invalid form submission', () => {
    component.ngOnInit();
    component.addCategoryForm.get('categoryName')?.setValue('');
    component.onSubmit();
    expect(component.showFailedWindow).toBeTruthy();
  });

  it('should call createAndEmitCategory on valid form submission', () => {
    component.ngOnInit();
    component.addCategoryForm.get('categoryName')?.setValue('Test Category');
    component.addCategoryForm.get('description')?.setValue('Test Description');
    jest.spyOn(component, 'createAndEmitCategory');
    component.onSubmit();
    expect(component.createAndEmitCategory).toHaveBeenCalled();
  });

  it('should reset form and show success window on success', () => {
    component.showSuccessWindow();
    expect(component.addCategoryForm.reset).toHaveBeenCalled();
    expect(component.succesWindow).toBeTruthy();
  });

  
});