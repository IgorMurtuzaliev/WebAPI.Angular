import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './home/page/page.component';
import { ProfileComponent } from './home/page/profile/profile.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { SearchResultComponent } from './home/page/search-result/search-result.component';
import { ContactsComponent } from './home/contact/contacts/contacts.component';
import { UsersprofilesComponent } from './home/page/usersprofiles/usersprofiles.component';
import {ShoosenContactComponent} from './home/contact/shoosen-contact/shoosen-contact.component'
import {ContactComponent} from './home/contact/contact.component'
import {AvatarUploadComponent} from './home/page/profile/avatar-upload/avatar-upload.component' 
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path:'',redirectTo:'/register',pathMatch:'full'},
  { path:'chat', component: ChatComponent},
  { path:'register', component: RegisterComponent},
  { path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent,
    children: [
      {path: 'page', component: PageComponent,
        children:[
          { path:'profile', component: ProfileComponent,
          children:[
             { path:'avatarUpload', component:AvatarUploadComponent }
          ]},                  
          { path:'search', component: SearchResultComponent},
          { path:'user/:id', component: UsersprofilesComponent}
        ]},  
        { path:'contact', component: ContactComponent,
        children: [
          { path:'shoosenContact/:id', component: ShoosenContactComponent},
          { path:'contacts', component: ContactsComponent}
        ]
      },
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
