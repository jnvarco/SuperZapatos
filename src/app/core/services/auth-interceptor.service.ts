import { Token } from './../../shared/models/token.model';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token: Token = this.localStorageService.get('token');

    const tokenInfo = token ? token.token : null;

    let authReq;

    if(tokenInfo && req.url.includes('/api')){
      authReq = req.clone({headers: req.headers.set('Authorization', tokenInfo)});
    }
    else{
      authReq = req;
    }

    return next.handle(authReq);
  }

}
