import { AdminService } from './admin.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private _auth:AdminService,private _router:Router) { }
  canActivate() {
    if(this._auth.loggedIn()){
      return true
    }else{
      this._router.navigate(['/adminLogin'])
      return false
    }
  }
  
}
