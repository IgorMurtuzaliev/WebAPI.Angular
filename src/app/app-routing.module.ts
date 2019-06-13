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
import { ContactsComponent } from './home/contacts/contacts.component';
import { UsersprofilesComponent } from './home/page/usersprofiles/usersprofiles.component';
import {ShoosenContactComponent} from './home/contacts/shoosen-contact/shoosen-contact.component'
import {AvatarUploadComponent} from './home/page/profile/avatar-upload/avatar-upload.component' 
import { ChatComponent } from './chat/chat.component';
import { UsersContactsComponent } from './home/page/users-contacts/users-contacts.component';
import { BlackListComponent } from './home/page/users-contacts/black-list/black-list.component';

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
          { path:'search/:searchQuery', component: SearchResultComponent},
          { path:'contacts', component: UsersContactsComponent,
        children:[
          { path:'blackList', component: BlackListComponent},
        ]},
          { path:'user/:id', component: UsersprofilesComponent}
        ]},  
        { path:'contacts', component: ContactsComponent,
        children: [
          { path:'shoosenContact', component: ShoosenContactComponent,
        children:[
          { path:'editContact', component: UsersprofilesComponent}
        ]}
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
