import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/shared/model/category.model';
import { ApiCategoryService } from 'src/shared/services/stock/api-category-service.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnDestroy, OnInit {


  private categories: Category[] = [];
  private subscription: Subscription = new Subscription();

  //Auto-generated methods

  constructor(
    private _apiCategory: ApiCategoryService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loadCategories();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  //Custom methods
  public getCategories(): Category[] {
    return this.categories;
  }

  public loadCategories(): void {
    this.subscription = this._apiCategory.getCategories().subscribe((data) => {
      this.categories = data.content;
    });
  }

  public onAddCategoryClick(): void {
    this._router.navigate(['add'],{relativeTo: this._route});
  }

  public onShowAllClick() {
    this._router.navigate(['all'], { 
      queryParams: { categories: JSON.stringify(this.categories) },
      relativeTo: this._route
    });
  }
  
}
