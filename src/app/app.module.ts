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
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent],
})
export class AppModule { }
