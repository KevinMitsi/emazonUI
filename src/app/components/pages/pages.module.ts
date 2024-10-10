import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from "../organisms/organisms.module";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { LoginComponent } from './login/login.component';
import { AtomsModule } from '../atoms/atoms.module';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    AdminPanelComponent,
    CategoryPageComponent,
    LoginComponent
  ],
  imports: [
    RouterOutlet,
    CommonModule,
    OrganismsModule,
    AtomsModule
],
  exports: [
    AdminPanelComponent,
    CategoryPageComponent,
    LoginComponent
  ]
})
export class PagesModule { }
