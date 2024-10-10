import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}

  public onAddCategoryClick(): void {
    this._router.navigate(['add'],{relativeTo: this._route});
  }

  public onShowAllClick() {
    this._router.navigate(['all'], { 
      relativeTo: this._route
    });
  }
  
}
