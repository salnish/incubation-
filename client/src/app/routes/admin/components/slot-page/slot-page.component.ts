import { AdminService } from './../../../../services/admin.service';
import { Slot } from './../../../../interfaces/slot';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot-page',
  templateUrl: './slot-page.component.html',
  styleUrls: ['./slot-page.component.css']
})
export class SlotPageComponent implements OnInit {

  allSlots!:Slot[];
  class:string='false'

  constructor(private _adminService:AdminService) { }
  getSlots(){
    this._adminService.getAllSlots()
    .subscribe({
      next:(v)=>{
        this.allSlots=v;
        this.class=v.selected?"true":"false"
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getSlots();

  }

  openDialog(){
    
  }

}
