import { AppData } from './../../../../interfaces/app-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  companyData!:AppData[];
  companyId!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
