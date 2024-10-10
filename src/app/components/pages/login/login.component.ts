import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private _router:Router) { }

  onCategoriesClick(){
    console.log('Categories clicked');
    this._router.navigate(['categories']);
  }
}
