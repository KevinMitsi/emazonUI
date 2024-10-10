import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import{TOKEN} from '../../../constants.class';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  stockBaseUrl:string = 'http://localhost:8082/api/v1/';
  userBaseUrl:string = 'http://localhost:8083/api/v1/';
  transactionBaseUrl:string = 'http://localhost:8084/api/v1/';
  cartBaseUrl:string = 'http://localhost:8085/api/v1/';

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const unprotectedEndpoints = [
      this.stockBaseUrl + 'category/getAll'
      // Add more unprotected endpoints as needed
    ];
    const isUnprotectedEndpoint = unprotectedEndpoints.some(endpoint => req.url.includes(endpoint));

    let clonedRequest = req;

    // Add the Bearer token to the request headers if it's not an unprotected endpoint
    if (!isUnprotectedEndpoint) {;
      clonedRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${TOKEN}`)
      });
    }

    // Handle errors
    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}