import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { AppModule } from './app.module';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: `categories`, component: CategoryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
