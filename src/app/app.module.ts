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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MainComponent } from './main/main.component';
import { PanelComponent } from './home/panel/panel.component';
import { AccountComponent } from './home/main/account/account.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    PanelComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent],
})
export class AppModule { }
