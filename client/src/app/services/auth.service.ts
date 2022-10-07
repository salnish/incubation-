import { User } from './../interfaces/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl="http://localhost:5000/api/users"

  constructor(private http:HttpClient,private _router:Router) { }

  registerUser(user:User){
    return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user:User){
    return this.http.post<any>(`${this._registerUrl}/login`,user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate([''])
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getAdminToken(){
    return localStorage.getItem('admin')
  }
  
}
