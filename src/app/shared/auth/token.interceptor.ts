import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

import {LoginService} from '../../shared/login.service';
import{HeadersService} from '../../shared/headers.service';
import {HttpHeaders} from '@angular/common/http'
import { Router, ActivatedRoute} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _login: LoginService, private _headersService: HeadersService, 
    private _router: Router, private _activeRoute: ActivatedRoute) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const token = this._headersService.getUserToken();
    
    const headers = new HttpHeaders(
        {
            'Content-Type':'application/json; charset=utf-8', 
            'Authorization': 'Bearer ' + token.token,
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*'
        });

    const param = this._activeRoute.snapshot.queryParamMap.getAll;
    if (param == null) {
      //do nothing
    }
    else{
      // this.redirectUrl = param;
       console.log('set this.redirectURl toXX: ' + param[0]);
    }

    request = request.clone({
      headers: headers});
    //return next.handle(request);
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log('401 Unauthorized.');
          this._login.logout();
          //return this._router.navigate(['/login']);
          // return this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
          return this._router.navigate(['/login'], { queryParams: { returnUrl: '/paystations' }});
        }
      }
    });
  }
}