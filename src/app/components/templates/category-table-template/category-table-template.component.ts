import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/shared/model/category.model';

@Component({
  selector: 'app-category-table-template',
  templateUrl: './category-table-template.component.html',
  styleUrls: ['./category-table-template.component.scss']
})
export class CategoryTableTemplateComponent implements OnInit {
  categories: Category[] = [];
  hasCategories: boolean = false;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.categories = JSON.parse(params['categories'] || '[]');
      this.hasCategories = this.categories.length !== 0;
    });
  }

}
