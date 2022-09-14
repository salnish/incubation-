import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserstatusComponent } from './components/userstatus/userstatus.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component'


@NgModule({
  declarations: [
    UserHomeComponent,
    UserFormComponent,
    UserstatusComponent,
    UserHeaderComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSelectModule,
    MatGridListModule,
    MatRadioModule

  ]
})
export class UserModule { }
