import { UserService } from './../../../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  value: number = 100;
  name!: string;

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getForm()
      .subscribe({
        next: (v) => {
          this.value = v.status == "pending" ? 70 : 80;
          this.name = v.name
        },
        error:(err)=>{
          console.log(err);
          this._router.navigate([''])
        }
      })
  }

}
