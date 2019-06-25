import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import  {HttpClient}from "@angular/common/http";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  constructor(private http:HttpClient,private fb:FormBuilder) { }
  formModel = this.fb.group({
    Name : ['',Validators.required],
    Surname : ['',Validators.required],
  });

  formModelPassword = this.fb.group({
    CurrentPassword : ['',Validators.required],
    Passwords:this.fb.group({
      NewPassword :['',[Validators.required, Validators.minLength(6)]],
      NewPasswordConfirm :['',Validators.required]
      }, {validator: this.comparePasswords}) 
  });

 userinfo;
 comparePasswords(fb:FormGroup){
  let confirmPassword= fb.get('NewPasswordConfirm');
  if (confirmPassword.errors==null ||'passwordMismatch'in confirmPassword.errors)
  {
    if (fb.get('NewPassword').value!=confirmPassword.value)
    confirmPassword.setErrors({passwordMismatch:true});
    else
    confirmPassword.setErrors(null);

  }
}
  getProfile(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    this.userinfo =this.http.get('https://localhost:44331/api/account',{headers : tokenHeader});
    return this.userinfo;
  }
  updateInfo(){
    return this.userinfo()
  }
  edit(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    var body = {
      Name: this.formModel.value.Name,
      Surname: this.formModel.value.Surname,
    };
    return this.http.put('https://localhost:44331/api/account', body,{headers : tokenHeader});
  }
  editPassword(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    // var form = new FormData();
    // form.append('CurrentPassword',this.formModelPassword.value.CurrentPassword );
    // form.append('NewPassword',this.formModelPassword.value.Passwords.NewPassword );
    // form.append('NewPasswordConfirm',this.formModelPassword.value.Passwords.NewPasswordConfirm );
    debugger;
    var body = {
      CurrentPassword: this.formModelPassword.value.CurrentPassword,
      NewPassword: this.formModelPassword.value.Passwords.NewPassword,
      NewPasswordConfirm:this.formModelPassword.value.Passwords.NewPasswordConfirm};
    return this.http.post('https://localhost:44331/api/account/editPassword', body,{headers : tokenHeader});
  }

  upload(file: File){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    const formData: FormData = new FormData();
    formData.append('Image', file);
    return this.http.put("https://localhost:44331/api/account/editAvatar", formData, {headers : tokenHeader});
}
}
