import { ViewApplicationComponent } from './components/view-application/view-application.component';
import { SlotPageComponent } from './components/slot-page/slot-page.component';
import { AppDataComponent } from './components/app-data/app-data.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'user', component: UserDataComponent },
      { path: 'appData', component: AppDataComponent },
      { path: 'appDetails', component: ViewApplicationComponent },
      { path: 'slot', component: SlotPageComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
