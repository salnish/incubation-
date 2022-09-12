import { UserService } from './../../../../services/user.service';
import { States } from './../../../../interfaces/states';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title: string = 'Application for Incubation';
  states: string[] = States

  constructor(private fb: FormBuilder, private _router: Router, private _userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._userService.getForm()
      .subscribe({
        next: (v) => {
          if (v.data) {
            this._router.navigate(['user/status'])
          }
        },
        error: (e) => { console.log(e) }
      })
  }

  incubationForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', [Validators.required, Validators.minLength(20)]],
    city: ['', [Validators.required, Validators.minLength(3)]],
    state: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
    companyName: ['', [Validators.required, Validators.minLength(3)]],
    teamBackground: ['', [Validators.required, Validators.minLength(20)]],
    companyProducts: ['', [Validators.required, Validators.minLength(20)]],
    problem: ['', [Validators.required, Validators.minLength(20)]],
    solution: ['', [Validators.required, Validators.minLength(20)]],
    proposition: ['', [Validators.required, Validators.minLength(20)]],
    competitors: ['', [Validators.required, Validators.minLength(20)]],
    revenue: ['', [Validators.required, Validators.minLength(20)]],
    marketSize: ['', [Validators.required, Validators.minLength(20)]],
    marketPlan: ['', [Validators.required, Validators.minLength(20)]],
    options: ['virtualIncubation', [Validators.required]],
    proposal: ['', [Validators.required, Validators.minLength(20)]],
  })

  onSubmit() {
    if (!this.incubationForm.valid) {
      return;
    }
    console.log(this.incubationForm.value)
    this._userService.submitForm(this.incubationForm.value)
      .subscribe({
        next: (v) => {
          this._snackBar.open(`${v.name} your Application has been submited success`, "ok")
          this._router.navigate(['user/status'])
        },
        error: (e) => { console.log(e) }
      })
  }

}
