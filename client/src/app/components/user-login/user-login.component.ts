import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  title: string = 'Login Form'
  path: string = 'userRegister'
  err!: string; 
  bar:boolean=false
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

   onLogin(event: any) {
    this.bar=!this.bar;
    console.log('login', event)
   this._auth.loginUser(event)
      .subscribe({
        next: (v) => {
          if (v.token) {
            localStorage.setItem('token', v.token)
            this.bar=!this.bar;
            this._router.navigate(['/user'])
            console.log(v)
          }
        },
        error: (e) => {
          if( e instanceof HttpErrorResponse) {
            this.err=e.error
            console.log(e.error)
            }
          }
      })
  }

}
