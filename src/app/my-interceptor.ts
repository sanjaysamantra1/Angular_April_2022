import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const hardCodedToken = '1d38fe-8671-6735-7360-2hjhsjh5';
    const requestWithToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${hardCodedToken}`,
      },
    });
    return next.handle(requestWithToken);
  }
}
