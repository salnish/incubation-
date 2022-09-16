import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  
  title: string = 'Admin Login Form'
  err!: string; 
  bar:boolean=false
  side:string='admin'

  constructor( private _auth: AdminService, private _router: Router) { }

  ngOnInit(): void {
  }

  onLogin(event: any) {
    this.bar=!this.bar;
    console.log('login', event)
   this._auth.loginAdmin(event)
      .subscribe({
        next: (v) => {
          console.log(v);
          
          if (v.token) {
            localStorage.setItem('admin', v.token)
            this.bar=!this.bar;
            this._router.navigate(['/admin'])
            console.log(v)
          }
        },
        error: (e) => {
          console.log(e);
          
          if( e instanceof HttpErrorResponse) {
            this.bar=!this.bar;
            this.err=e.error
            console.log(e.error)
            }
          }
      })
  }

}
