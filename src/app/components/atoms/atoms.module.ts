import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelH2Component } from './admin-panel-h2/admin-panel-h2.component';
import { ButtonComponent } from './button/button.component';
import { GreenButtonComponent } from './green-button/green-button.component';
import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';
import { HrDividerComponent } from './hr-divider/hr-divider.component';
import { LogoComponent } from './logo/logo.component';
import { TextDangerComponent } from './text-danger/text-danger.component';
import { SuccessWindowComponent } from './success-window/success-window.component';
import { FailedWindowComponent } from './failed-window/failed-window.component';
import { WarningDivComponent } from './warning-div/warning-div.component';
import { EmptyBoxDivComponent } from './empty-box-div/empty-box-div.component';




@NgModule({
  declarations: [
    AdminPanelH2Component,
    ButtonComponent,
    GreenButtonComponent,
    HamburguerButtonComponent,
    HrDividerComponent,
    LogoComponent,
    TextDangerComponent,
    SuccessWindowComponent,
    FailedWindowComponent,
    WarningDivComponent,
    EmptyBoxDivComponent
  ],
  imports: [
    CommonModule
],
  exports: [
    AdminPanelH2Component,
    FailedWindowComponent,
    ButtonComponent,
    GreenButtonComponent,
    HamburguerButtonComponent,
    HrDividerComponent,
    LogoComponent,
    TextDangerComponent,
    SuccessWindowComponent,
    WarningDivComponent,
    EmptyBoxDivComponent
  ]
})
export class AtomsModule { }
