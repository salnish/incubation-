import { AppForm } from './../../../../interfaces/app-form';
import { Router } from '@angular/router';
import { AdminService } from './../../../../services/admin.service';
import { AppData } from './../../../../interfaces/app-data';
import { Component, OnChanges, OnInit, ViewChild, SimpleChanges, DoCheck } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.css']
})
export class AppDataComponent implements OnInit, OnChanges, DoCheck {

  appData: AppForm[] = [];
  allData: AppData[] = [];
  newForm: AppData[] = [];
  pendingForm: AppData[] = [];
  showTable: boolean = true;
  formId!: string;
  pending: string = 'Pending';
  approve: string = 'Approved';
  decline: string = 'Declined'
  constructor(private _adminService: AdminService, private _router: Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }



  ngOnInit(): void {
    this.getAll()

  }

  ngDoCheck(): void {


  }

  displayedColumns: string[] = ['position', 'Application Id', 'Company Name', 'Status', 'Action'];
  displayedColumns2: string[] = ['position', 'Application Id', 'Company Name', 'Status', 'Action', 'View'];
  displayedColumns3: string[] = ['position', 'Application Id', 'Company Name', 'Status', 'Action', 'View'];
  dataSource = new MatTableDataSource<AppData>(this.allData);
  newDataSource = new MatTableDataSource<AppData>(this.newForm);
  pendingDataSource = new MatTableDataSource<AppData>(this.pendingForm);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
  }

  getAll() {
    this._adminService.getAppData()
      .subscribe({
        next: (v) => {
          this.appData = v;
          v.map((x) => {
            let i = 0;
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

        }
      })
  }


  showApplication(formId: string) {
    this.showTable = !this.showTable;
    this.formId = formId;
  }



  mapData(allData: AppData[]) {
    this.allData.forEach((x) => {
      if (x.status == 'New') {
        this.newForm.push(x);
      } else if (x.status == 'Pending') {
        this.pendingForm.push(x);
      }
    })
  }

  onclose() {
    this.showTable = !this.showTable
  }

  updateStatus(formId: string, status: string) {
    this._adminService.updateStatus(formId, status)
      .subscribe({
        next: (v) => {
          this.allData = [];
          this.newForm = [];
          this.pendingForm = [];
          this.getAll()
          this.dataSource = new MatTableDataSource<AppData>(this.allData);
          this.newDataSource = new MatTableDataSource<AppData>(this.newForm);
          this.pendingDataSource = new MatTableDataSource<AppData>(this.pendingForm);
          console.log(this.newForm);
          console.log(this.pendingForm);

        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
