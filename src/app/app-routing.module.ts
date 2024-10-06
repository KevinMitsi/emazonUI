import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { AdminPanelComponent } from './components/pages/admin-panel/admin-panel.component';

const routes: Routes = [
 {path: 'login', component: LoginComponent},
 {path: 'dashboard', component: AdminPanelComponent, 
  children:[
    {path: 'category', component: CategoryPageComponent}
  ]
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
