import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hide: boolean = true;
  
  

  @Input() title:string='' 
  @Input() path:string=''
  @Input() errorMsg:string=''
  @Input() bar:boolean= false;
  @Output() form:EventEmitter<any> = new EventEmitter()
  route:string=''

  constructor(private fb: FormBuilder,private _auth:AuthService ,private _router:Router) {
  }

  ngOnInit() {
    this.route= this.path=='userLogin'? 'Already registered ,Login':'Not registered , Register'
    if(this._auth.loggedIn()){
      this._router.navigate(['/user'])
    }
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  OnSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.form.emit(this.loginForm.value)
    console.log(this.loginForm.value);
  }

  onNav(){
    this._router.navigate([`${this.path}`])
  }
}
