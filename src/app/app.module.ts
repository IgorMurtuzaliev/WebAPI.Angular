import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './account/register/register.component';
import {NgxMaskModule} from 'ngx-mask'
import { RegisterService } from 'src/app/account///shared/register.service';
import{HttpClientModule}from "@angular/common/http";
import { LoginComponent } from './account/login/login.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { PageComponent } from './home/page/page.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ProfileComponent } from './home/page/profile/profile.component';
import { EditProfileComponent } from './home/page/profile/edit-profile/edit-profile.component';
import { SearchResultComponent } from './home/page/search-result/search-result.component';
import { ContactsComponent } from './home/contacts/contacts.component';
import { UsersprofilesComponent } from './home/page/usersprofiles/usersprofiles.component';
import {ScrollingModule} from '@angular/cdk/scrolling'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    PageComponent,
    SidebarComponent,
    ProfileComponent,
    EditProfileComponent,
    SearchResultComponent,
    ContactsComponent,
    UsersprofilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    ScrollingModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent],
})
export class AppModule { }
