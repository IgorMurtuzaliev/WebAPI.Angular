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
    Name : '',
    Surname : '',
  });
 userinfo;
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

  upload(file: File){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    const formData: FormData = new FormData();
    formData.append('Image', file);
    return this.http.put("https://localhost:44331/api/account/editAvatar", formData, {headers : tokenHeader});
}
}
