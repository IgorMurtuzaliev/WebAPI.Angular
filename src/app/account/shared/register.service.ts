import { Injectable, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import{HttpClient}from "@angular/common/http"
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  externalProviderWindow = null;
  constructor(private fb:FormBuilder, private http:HttpClient,@Inject(DOCUMENT) private document: Document,) { }
  // formModel = this.fb.group({
  //   Name :['',Validators.required],
  //   LastName :['',Validators.required],
  //   Email :['',[Validators.required, Validators.email]],
  //   Passwords:this.fb.group({
  //   Password :['',[Validators.required, Validators.minLength(6)]],
  //   PasswordConfirm :['',Validators.required]
  //   }, {validator: this.comparePasswords})  
  // });

  comparePasswords(form){
    console.log(form)
    // let confirmPswrdCtrl = form.get('PasswordConfirm');
    // if(confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors){
    //   if(form.get('Password').value!= confirmPswrdCtrl.value) confirmPswrdCtrl.setErrors({passwordMismatch:true});
    //   else confirmPswrdCtrl.setErrors(null);
    // } 
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
  signInWithGoogle() {
  return this.http.get('https://localhost:44331/api/account/signInWithGoogle')
  }
}
