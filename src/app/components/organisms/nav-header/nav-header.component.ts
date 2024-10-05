import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent { 

  constructor(private _router:Router) { }

  onCategoriesClick(){
    console.log('Categories clicked');
    this._router.navigate(['categories']);
  }

  onBrandsClick(){
    console.log('Brands clicked');
    this._router.navigate(['brands']);
  }

}
