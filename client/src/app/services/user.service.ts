import { User } from './../interfaces/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppForm } from '../interfaces/app-form';
import { catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _registerUrl="http://localhost:5000/api/users"

  constructor(private http:HttpClient,private _router:Router) { }


  submitForm(formData:AppForm){
    return this.http.post<any>(`${this._registerUrl}/submitForm`,formData)
  }

  getForm(){
    return this.http.get<any>(`${this._registerUrl}/getForm`).pipe(retry(1),catchError(this.handleError))
  }
  handleError(error:any) {

    console.log( error.error.message);
    if(error.error.message==="jwt expired"){
      console.log("refresh")
    }
    
    
    return error
  }
}
