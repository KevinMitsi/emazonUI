import { Injectable } from '@angular/core';
import { Category } from 'src/shared/model/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Page } from 'src/shared/model/page.model';


@Injectable({
  providedIn: 'root'
})
export class ApiCategoryService {

  private apiBase:string  = "http://localhost:8082/api/v1/category";
  constructor(
    private _http:HttpClient
  ) {}

  getCategories(): Observable<Page<Category>> {
    return this._http.get<Page<Category>>(this.apiBase+"/getAll");
  }
}
