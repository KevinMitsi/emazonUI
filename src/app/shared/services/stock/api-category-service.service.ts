import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Page } from '../../model/page.model';
import { Category } from '../../model/category.model';




@Injectable({
  providedIn: 'root'
})
export class ApiCategoryService {

  private readonly apiBase:string  = "http://localhost:8082/api/v1/category";
  constructor(
    private readonly _http:HttpClient
  ) {}

  getCategories(): Observable<Page<Category>> {
    return this._http.get<Page<Category>>(this.apiBase+"/getAll");
  }

  postCategory(category: Category): Observable<Category> {
    return this._http.post<Category>(this.apiBase+"/new", category);
  }
}
