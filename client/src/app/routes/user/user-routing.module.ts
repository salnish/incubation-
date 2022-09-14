import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UserstatusComponent } from './components/userstatus/userstatus.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:UserHomeComponent,
    children:[
      {path:'form',component:UserFormComponent},
      {path:'status',component:UserstatusComponent},
      {path:'progress',component:ProgressBarComponent},
      {path:'',redirectTo:'/user/form',pathMatch:'full'}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
