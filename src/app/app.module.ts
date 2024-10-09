import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplatesModule } from './components/templates/templates.module';
import { OrganismsModule } from './components/organisms/organisms.module';
import { PagesModule } from './components/pages/pages.module';
import { MoleculesModule } from './components/molecules/molecules.module';
import { AtomsModule } from './components/atoms/atoms.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TemplatesModule,
    OrganismsModule,
    PagesModule,
    MoleculesModule,
    AtomsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
