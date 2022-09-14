import { AppForm } from './../../../../interfaces/app-form';
import { UserService } from './../../../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userstatus',
  templateUrl: './userstatus.component.html',
  styleUrls: ['./userstatus.component.css']
})
export class UserstatusComponent implements OnInit {

  title:string='Application Details'
  app!:AppForm
  constructor(private _router:Router, private _userService:UserService) {
   }

  ngOnInit(): void {
    this._userService.getForm()
    .subscribe({
      next:(v)=>{
        this.app=v;
        console.log(v)
        console.log( this.app.name)
      }
    })
  }



}
