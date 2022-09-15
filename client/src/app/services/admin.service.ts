import { Slot } from './../interfaces/slot';
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

  getApprovedForms(){
    return this.http.get<any>(`${this._adminurl}/approvedForms`)
  }

  updateStatus(formId:string,status:string){
    let body={
      id:formId,
      status:status
    }
    return this.http.put<any>(`${this._adminurl}/updateStatus`,body)
  }

  getAllSlots(){
    return this.http.get<Slot[]>(`${this._adminurl}/allSlots`)
  }
  bookSlot(slot:Slot,companyId:string){
    let body={
      id:slot._id,
      section:slot.section,
      slNo:slot.slot_no,
      companyId:companyId
    }
    return this.http.put<any>(`${this._adminurl}/slotBook`,body)
  }
}
