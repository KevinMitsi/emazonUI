import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/model/category.model';
import { ApiCategoryService } from 'src/app/shared/services/stock/api-category-service.service';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss'],
})
export class AddCategoryFormComponent {
  addCategoryForm: FormGroup = new FormGroup({});

  showFailedWindow = false;
  errorMessage: string = '';
  errorTitle = 'Error en el formulario';

  succesWindow = false;
  successMessage = 'Categoría creada con éxito';
  successTitle = 'Acción Exitosa';

  isThereError?:boolean;


  constructor(
    private readonly fb: FormBuilder,
    private readonly _categoryService: ApiCategoryService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.addCategoryForm = this.fb.group({
      categoryName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$'), Validators.maxLength(30)],
      ],
      description: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$'), Validators.maxLength(90)],
      ],
    });
  }

  hasError(controlName: string, errorType: string): boolean | null {
    const control = this.addCategoryForm.get(controlName);
    return (
      control &&
      control.hasError(errorType) &&
      (control.dirty || control.touched)
    );
  }

  onSubmit(): void {
    this.isThereError=false
    this.errorMessage = '';
    this.showFailedWindow = false;

    if (this.addCategoryForm.invalid) {
      this.showFailedWindow = true;
      this.addCategoryForm.markAllAsTouched();
      this.chooseErrorMessage();
      return;
    }
    this.createAndEmitCategory(this.addCategoryForm.value.categoryName,this.addCategoryForm.value.description);

    if(this.isThereError){
      this.showSuccessWindow();
    }
  }

  onCloseFailedWindow(): void {
    this.showFailedWindow = false;
    this.isThereError=false;
  }

  onCloseSuccessWindow(): void {
    this.succesWindow = false;
    this.router.navigate(['dashboard/category/all']);
  }

  private createAndEmitCategory(name: string, description: string): void {
    const categoryData: Category = {
      name: name,
      description: description,
    };
  
    this._categoryService.postCategory(categoryData).subscribe({
      next: () => {
        this.showSuccessWindow();
      },
      error: (err) => {
        console.log(err);
        this.errorTitle = 'Error de conexión con el servidor'
        this.errorMessage = this.getErrorMessage(err);
        this.showFailedWindow = true; 
      }
    });
  }

  private showSuccessWindow(): void {
    this.addCategoryForm.reset();
    this.succesWindow = true;
  }
  
  private getErrorMessage(error: any): string {
    this.isThereError = true;
    if (error.status === 0) {
      return 'No se pudo conectar con el servidor. Por favor, inténtalo más tarde.';
    } 
    if (error.status >= 400 && error.status < 500) {
      return 'Error de validación. Verifica los datos ingresados.';
    } 
     if (error.status >= 500) {
      return 'Error en el servidor. Intenta de nuevo más tarde.';
    }
    return 'Ocurrió un error desconocido. Intenta nuevamente.';
  }


  private chooseErrorMessage(): void {
    if (this.addCategoryForm.get('categoryName')?.hasError('required')) {
      this.errorMessage = 'El nombre de la categoría no puede estar vacío.';
    }
    if (this.addCategoryForm.get('categoryName')?.hasError('pattern')) {
      this.errorMessage = 'El nombre solo puede contener letras y números.';
    }
    if (this.addCategoryForm.get('description')?.hasError('required')) {
      this.errorMessage = 'La descripción no puede estar vacía.';
    }
    if (this.addCategoryForm.get('description')?.hasError('pattern')) {
      this.errorMessage ='La descripción solo puede contener letras y números.';
    }
    if(this.addCategoryForm.get('categoryName')?.hasError('maxLength')){
      this.errorMessage = 'El nombre de la categoría no puede tener más de 30 caracteres';
    }
    if(this.addCategoryForm.get('description')?.hasError('maxLength')){
      this.errorMessage = 'La descripción no puede tener más de 90 caracteres';
    }
  }
}
