import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',redirectTo:'/register',pathMatch:'full'},
  { path:'register', component: RegisterComponent},
  { path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
