import { AdminService } from './../../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
  }

  logout(){
    this._adminService.logoutAdmin()
  }
}
