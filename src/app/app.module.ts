import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { NavItemComponent } from './components/molecules/nav-item/nav-item.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { NavHeaderComponent } from './components/organisms/nav-header/nav-header.component';
import { HamburguerButtonComponent } from './components/atoms/hamburguer-button/hamburguer-button.component';
import { TextboxComponent } from './components/atoms/textbox/textbox.component';
import { HrDividerComponent } from './components/atoms/hr-divider/hr-divider.component';
import { AdminPanelComponent } from './components/pages/admin-panel/admin-panel.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { GreenButtonComponent } from './components/atoms/green-button/green-button.component';
import { AdminPanelH2Component } from './components/atoms/admin-panel-h2/admin-panel-h2.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    LogoComponent,
    HamburguerButtonComponent,
    TextboxComponent,
    NavItemComponent,
    HrDividerComponent,
    CategoryPageComponent,
    NavHeaderComponent,
    AdminPanelComponent,
    FooterComponent,
    GreenButtonComponent,
    AdminPanelH2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
