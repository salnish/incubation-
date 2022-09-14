import { AdminService } from './../../../../services/admin.service';
import { AppForm } from './../../../../interfaces/app-form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  
  title:string='Application Details'
  app!:AppForm;
  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    console.log('oninit')
    this._adminService.getApplication("dfjhdsfsdjkhsdajhksdfjkhsdfkhj")
    .subscribe({
      next:(v)=>{
        if(v){
          this.app=v;
        }
      }
    })
  }

}
