import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/model/category.model';
import { ApiCategoryService } from 'src/app/shared/services/stock/api-category-service.service';


@Component({
  selector: 'app-category-table-template',
  templateUrl: './category-table-template.component.html',
  styleUrls: ['./category-table-template.component.scss'],
})
export class CategoryTableTemplateComponent implements OnInit {
  categories: Category[] = [];
  hasCategories: boolean = false;

  showErrorDiv = false;

  constructor(
    private readonly _apiCategory: ApiCategoryService,
  ) {}

  ngOnInit(): void {
    this._apiCategory.getCategories().subscribe({
      next: (data)=> {
        this.categories = data.content;
        this.hasCategories = this.categories.length > 0;
      },
      error: () => {
        this.showErrorDiv = true;
      }
  });
}


}
