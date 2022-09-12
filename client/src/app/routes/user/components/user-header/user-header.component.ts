import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(public _authService:AuthService) { }

  ngOnInit(): void {
  }

}
