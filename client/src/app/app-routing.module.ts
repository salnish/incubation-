import { AuthGuard } from './services/auth.guard';
import { AdminAuthGuard } from './services/admin-auth.guard';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/userLogin',pathMatch:'full'},
  { path:'userLogin',component:UserLoginComponent},
  { path:'userRegister',component:UserRegisterComponent},
  { path:'adminLogin',component:AdminloginComponent},
  {
    path:'user',
    canActivate:[AuthGuard],
    loadChildren:()=>
    import('./routes/user/user.module').then((m)=>m.UserModule)
  },
  { 
    path:'admin',
    canActivate:[AdminAuthGuard],
    loadChildren: () =>
    import('./routes/admin/admin.module').then((m)=> m.AdminModule)
  },
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
