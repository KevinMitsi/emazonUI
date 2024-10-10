import { Component, Input } from '@angular/core';
import { Category } from 'src/app/shared/model/category.model';


@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent  {
  @Input() categories:Category[] = [];
  constructor() { }
}
