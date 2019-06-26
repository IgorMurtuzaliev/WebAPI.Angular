import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './account/register/register.component';
import { NgxMaskModule } from 'ngx-mask'
import { RegisterService } from 'src/app/account///shared/register.service';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './account/login/login.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { PageComponent } from './home/page/page.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ProfileComponent } from './home/page/profile/profile.component';
import { SearchResultComponent } from './home/page/search-result/search-result.component';
import { ContactsComponent } from './home/contacts/contacts.component';
import { UsersprofilesComponent } from './home/page/usersprofiles/usersprofiles.component';
import {ScrollingModule, ScrollDispatcher,} from '@angular/cdk/scrolling';
import { ShoosenContactComponent } from './home/contacts/shoosen-contact/shoosen-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarUploadComponent } from './home/page/profile/avatar-upload/avatar-upload.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ChatComponent } from './chat/chat.component';
import { UsersContactsComponent } from './home/page/users-contacts/users-contacts.component';
import { BlackListComponent } from './home/page/users-contacts/black-list/black-list.component';
import {EditContactComponent} from './home/page/users-contacts/edit-contact/edit-contact.component';
import { PasswordChangeComponent } from './home/page/profile/password-change/password-change.component';
import { DialogsComponent } from './home/page/dialogs/dialogs.component';
import { DialogComponent } from './home/page/dialog/dialog.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MainComponent } from './main/main.component'
import {PopupModule} from 'ng2-opd-popup'

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
    SearchResultComponent,
    ContactsComponent,
    UsersprofilesComponent,
    ShoosenContactComponent,
    AvatarUploadComponent,
    ChatComponent,
    UsersContactsComponent,
    BlackListComponent,
    EditContactComponent,
    PasswordChangeComponent,
    DialogsComponent,
    DialogComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ScrollDispatchModule,
    NgxDropzoneModule,
    PickerModule,
    PopupModule.forRoot()
  ],
  providers: [RegisterService, ContactsComponent, ShoosenContactComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
