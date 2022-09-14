import { Observable } from 'rxjs';
import { AppForm } from './../interfaces/app-form';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _registerUrl="http://localhost:5000/api/admin"

  constructor(private http:HttpClient,private _router:Router) { }

  getAppData():Observable<AppForm[]>{
    return this.http.get<AppForm[]>(`${this._registerUrl}/getAppData`)
  }

  getApplication(formId:string){
    console.log('http ')
    return this.http.get<any>(`${this._registerUrl}/viewApplication/${formId}`)
  }
}
