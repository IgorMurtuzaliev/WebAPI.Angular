import { Injectable, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import{HttpClient, HttpHeaders}from "@angular/common/http"
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  externalProviderWindow = null;
  constructor(private fb:FormBuilder, private http:HttpClient,@Inject(DOCUMENT) private document: Document) { }

  comparePasswords(form){
    console.log(form)
  }

  register(formModel){
    var body = {
      Name: formModel.value.Name,
      Surname: formModel.value.Surname,
      Email: formModel.value.Email,
      Phone: formModel.value.Phone,
      Password: formModel.value.Passwords.Password,
      PasswordConfirm:formModel.value.Passwords.PasswordConfirm,
    };
    return this.http.post('https://localhost:44331/api/account/register', body);
  }
  login(formData){
    return this.http.post('https://localhost:44331/api/account/login', formData);
  }

  getClientProfile(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('token')})
    return this.http.get('https://localhost:44331/api/account',{headers:tokenHeader})
  }
  
}
