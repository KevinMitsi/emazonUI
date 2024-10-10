import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TemplatesModule } from './components/templates/templates.module';
import { OrganismsModule } from './components/organisms/organisms.module';
import { PagesModule } from './components/pages/pages.module';
import { MoleculesModule } from './components/molecules/molecules.module';
import { AtomsModule } from './components/atoms/atoms.module';
import { InterceptorService } from './shared/services/interceptor/interceptor.service';




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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
