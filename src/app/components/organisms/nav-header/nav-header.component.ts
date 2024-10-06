import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent { 

  constructor(private _router:Router, private route:ActivatedRoute) { }

  onCategoriesClick(){
    console.log('Categories clicked');
    this._router.navigate(['category'], {relativeTo:this.route});
  }

  onBrandsClick(){
    console.log('Brands clicked');
  }

}
