import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import  {HttpClient}from "@angular/common/http";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  constructor(private http:HttpClient,private fb:FormBuilder) { }
  formModel = this.fb.group({
    Name : '',
    Surname : '',
  });

  getProfile(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get('https://localhost:44331/api/account',{headers : tokenHeader});
  }
  edit(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    var body = {
      Name: this.formModel.value.Name,
      Surname: this.formModel.value.Surname,
    };
    return this.http.put('https://localhost:44331/api/account', body,{headers : tokenHeader});
  }
}
