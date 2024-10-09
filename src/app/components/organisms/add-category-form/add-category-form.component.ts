import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss']
})
export class AddCategoryFormComponent implements OnInit {
  addCategoryForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) 
  {
    this.buildForm();
}

  ngOnInit(): void {
  }


  private buildForm(){
    this.addCategoryForm = this.fb.group({
      categoryName: ['', [Validators.maxLength(50), Validators.required]], 
      description: ['', [Validators.maxLength(90), Validators.required]]
  });
 }

 public onSubmit(){

 }
}
