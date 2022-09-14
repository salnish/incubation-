import { Observable } from 'rxjs';
import { AppForm } from './../interfaces/app-form';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _adminurl="http://localhost:5000/api/admin"

  constructor(private http:HttpClient,private _router:Router) { }

  getAppData():Observable<AppForm[]>{
    return this.http.get<AppForm[]>(`${this._adminurl}/getAppData`)
  }

  getApplication(formId:string){
    return this.http.get<any>(`${this._adminurl}/viewApplication/${formId}`)
  }

  updateStatus(formId:string,status:string){
    let body={
      id:formId,
      status:status
    }
    return this.http.put<any>(`${this._adminurl}/updateStatus`,body)
  }
}
