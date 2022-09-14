import { AdminService } from './../../../../services/admin.service';
import { AppForm } from './../../../../interfaces/app-form';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  
  title:string='Application Details'
  app!:AppForm;
  @Input() formId!:string;
  @Output() close:EventEmitter<any> = new EventEmitter()
  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    console.log('oninit')
    this._adminService.getApplication(this.formId)
    .subscribe({
      next:(v)=>{
        if(v){
          this.app=v;
          console.log(v)
        }
      },
      error:(err)=>{
        this.title=err.error.message
        console.log(err.error.message)
        
      }
    })
  }
  

  closeDetails(){
    this.close.emit()

  }

}
