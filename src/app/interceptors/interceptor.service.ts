import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Pasó por el interceptor');

    const headers = new HttpHeaders({
      'token-usuario': 'A123G35434HT434234'
    });

    // la req por asi decirlo solo se puede usar una vez por tanto
    // para manipular la req hay que clonarla antes
    const reqClone = req.clone({
      headers
    });
    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse) {
    console.log('sucedio un error');
    console.log('registrado en el log file');
    console.warn(error);
    return throwError('Error personalizado!');
  }
}
