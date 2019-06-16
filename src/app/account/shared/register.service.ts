import { Injectable, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import{HttpClient, HttpHeaders}from "@angular/common/http"
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private fb:FormBuilder, private http:HttpClient,@Inject(DOCUMENT) private document: Document) { }

  formModel = this.fb.group({
    Name :['',Validators.required],
    Surname :[''],
    Email :['',[Validators.required, Validators.email]],
    Phone :['',Validators.required],
    Passwords:this.fb.group({
    Password :['',[Validators.required, Validators.minLength(6)]],
    PasswordConfirm :['',Validators.required]
    }, {validator: this.comparePasswords})  
  });

  comparePasswords(fb:FormGroup){
    let confirmPassword= fb.get('PasswordConfirm');
    if (confirmPassword.errors==null ||'passwordMismatch'in confirmPassword.errors)
    {
      if (fb.get('Password').value!=confirmPassword.value)
      confirmPassword.setErrors({passwordMismatch:true});
      else
      confirmPassword.setErrors(null);

    }
  }

  register(){
    var body = {
      Name: this.formModel.value.Name,
      Surname: this.formModel.value.Surname,
      Email: this.formModel.value.Email,
      Phone: this.formModel.value.Phone,
      Password: this.formModel.value.Passwords.Password,
      PasswordConfirm: this.formModel.value.Passwords.PasswordConfirm,
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
