import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelH2Component } from './admin-panel-h2/admin-panel-h2.component';
import { ButtonComponent } from './button/button.component';
import { GreenButtonComponent } from './green-button/green-button.component';
import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';
import { HrDividerComponent } from './hr-divider/hr-divider.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    AdminPanelH2Component,
    ButtonComponent,
    GreenButtonComponent,
    HamburguerButtonComponent,
    HrDividerComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
],
  exports: [
    AdminPanelH2Component,
    ButtonComponent,
    GreenButtonComponent,
    HamburguerButtonComponent,
    HrDividerComponent,
    LogoComponent
  ]
})
export class AtomsModule { }
