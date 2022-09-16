import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  
  title:string='Register Form'
  path:string='userLogin'
  side:string='user'

  constructor(private _auth:AuthService , private _router:Router) { }

  ngOnInit(): void {
    
  }

  onRegister(event: any){
    console.log('register',event)
    this._auth.registerUser(event)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['/user'])
      }
    )
  }

}
