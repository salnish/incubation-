import { LoginComponent } from './pages/admin/login/login.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:UserLoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'userHome',
    component:UserHomeComponent
  },
  {
    path:'admin',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
