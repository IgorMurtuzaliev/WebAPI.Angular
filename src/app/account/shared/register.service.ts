import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import{HttpClient}from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private fb:FormBuilder, private http:HttpClient) { }
  formModel = this.fb.group({
    Name :['',Validators.required],
    LastName :['',Validators.required],
    Email :['',[Validators.required, Validators.email]],
    Passwords:this.fb.group({
    Password :['',[Validators.required, Validators.minLength(6)]],
    PasswordConfirm :['',Validators.required]
    }, {validator: this.comparePasswords})  
  });

  comparePasswords(fb: FormGroup){
    let confirmPswrdCtrl = fb.get('PasswordConfirm');
    if(confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors){
      if(fb.get('Password').value!= confirmPswrdCtrl.value) confirmPswrdCtrl.setErrors({passwordMismatch:true});
      else confirmPswrdCtrl.setErrors(null);
    } 
  }

  register(){
    var body = {
      Name: this.formModel.value.Name,
      LastName: this.formModel.value.LastName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Passwords.Password,
      PasswordConfirm: this.formModel.value.Passwords.PasswordConfirm,
    };
    return this.http.post('https://localhost:44357/api/account/register', body);
  }

  
}
