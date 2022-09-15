import { AdminService } from './../../../../services/admin.service';
import { Slot } from './../../../../interfaces/slot';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot-page',
  templateUrl: './slot-page.component.html',
  styleUrls: ['./slot-page.component.css']
})
export class SlotPageComponent implements OnInit {

  allSlots:Slot[]=[];
  class:string='false'
  dialog:boolean=false;
  slot!:Slot;

  constructor(private _adminService:AdminService) { }
  getSlots(){
    this.allSlots=[]
    this._adminService.getAllSlots()
    .subscribe({
      next:(v)=>{
        v.forEach(x => {
          x.selected=x.selected?'true':'false'
          this.allSlots.push(x)
        });
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getSlots();

  }

  openDialog(id:string,slotSection:string,slotNo:string,selected?:string|boolean,companyName?:string){
    if(companyName){
      return
    }
    this.dialog=!this.dialog;
    this.slot={
      _id:id,
      section:slotSection,
      slot_no:slotNo,
      selected:selected,
      companyname:companyName
    }
    
  }
  
  onClose(){
    this.dialog=!this.dialog;
  }

  updateData(){
    this.getSlots();
    this.onClose();
  }
}
