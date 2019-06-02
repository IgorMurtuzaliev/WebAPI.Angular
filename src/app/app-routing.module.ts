import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './home/page/page.component';
import { ProfileComponent } from './home/page/profile/profile.component';
import { EditProfileComponent } from './home/page/edit-profile/edit-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'/register',pathMatch:'full'},
  { path:'register', component: RegisterComponent},
  { path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent,
    children: [
      {path: 'page', component: PageComponent,
        children:[
          { path:'profile', component: ProfileComponent},
          { path:'editProfile', component: EditProfileComponent},
        ]},
      {path: 'sidebar', component: PageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
