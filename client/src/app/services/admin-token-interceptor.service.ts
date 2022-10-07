import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminTokenInterceptorService {

  constructor(private injector:Injector, private _router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService)
    console.log(this._router.url)
    let tokenizedReq =req.clone({
      setHeaders:{
        Authorization:`Bearer ${authService.getAdminToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
