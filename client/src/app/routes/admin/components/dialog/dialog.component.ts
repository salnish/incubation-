import { Slot } from './../../../../interfaces/slot';
import { AppForm } from './../../../../interfaces/app-form';
import { AdminService } from './../../../../services/admin.service';
import { AppData } from './../../../../interfaces/app-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() slot!:Slot;
  @Output() closeBox:EventEmitter<any> =new EventEmitter()
  @Output() update:EventEmitter<any> = new EventEmitter()
  companyData:AppData[]=[];
  companyId!:string;
  error!:string;

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this._adminService.getApprovedForms()
    .subscribe({
      next:(v)=>{
        v.map((x:AppForm) => {
          const newData: AppData = {
            id: x._id,
            companyName: x.companyName,
            status: x.status
          }
          this.companyData.push(newData);
        })
      }
    })
  }

  bookSlot(){
    console.log(this.companyId)
    if(!this.companyId){
      this.error='please select !'
      console.log("return")
      return;
    }
    this._adminService.bookSlot(this.slot,this.companyId)
    .subscribe({
      next:(v)=>{
        console.log(v)
        this.update.emit()
      },
      error:(e)=>{
        console.log(e)
      }
    })

  }

  close(){
    this.closeBox.emit()
  }

}
