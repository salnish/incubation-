import { AppForm } from './../../../../interfaces/app-form';
import { Router } from '@angular/router';
import { AdminService } from './../../../../services/admin.service';
import { AppData } from './../../../../interfaces/app-data';
import { Component, OnChanges, OnInit,ViewChild, SimpleChanges } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.css']
})
export class AppDataComponent implements OnInit,OnChanges {

  appData: AppForm[]=[];
  allData:AppData[]=[] ;
  newForm:AppData[]=[];
  pendingForm:AppData[]=[];
  constructor(private _adminService: AdminService, private _router: Router) {
  }

 
  ngOnInit(): void {
    
     
     
      
  }

  displayedColumns: string[] = ['position','Application Id', 'Company Name', 'Status', 'Action'];
  dataSource = new MatTableDataSource<AppData>(this.allData);
  newDataSource = new MatTableDataSource<AppData>(this.newForm);
  pendingDataSource = new MatTableDataSource<AppData>(this.pendingForm);

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngAfterViewInit() {
    console.log('AFVIN')
    this._adminService.getAppData()
      .subscribe({
        next: (v) => {
          this.appData = v;
          v.map((x) => {
            let i=0;
            const newData: AppData = {
              id: x._id,
              companyName: x.companyName,
              status: x.status
            }
            this.allData.push(newData);
          })
          this.mapData(this.allData);
          this.dataSource.paginator = this.paginator;
          this.newDataSource.paginator = this.paginator;
          this.pendingDataSource.paginator = this.paginator;
        console.log(this.allData)
        console.log(this.newForm)
        console.log(this.pendingForm.length)
        }
      })
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }



  mapData(allData:AppData[]){
    this.allData.forEach((x)=>{
      if(x.status=='New'){
        this.newForm.push(x);
      }else if(x.status=='Pending'){
        this.pendingForm.push(x);
      }
    })
  }

}
