import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTableTemplateComponent } from './category-table-template/category-table-template.component';
import { OrganismsModule } from "../organisms/organisms.module";



@NgModule({
  declarations: [
    CategoryTableTemplateComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule
],
  exports: [
    CategoryTableTemplateComponent
  ]
})
export class TemplatesModule { }
