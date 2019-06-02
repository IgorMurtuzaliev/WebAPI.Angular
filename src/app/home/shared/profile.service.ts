import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import  {HttpClient}from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient,) { }
  getProfile(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get('https://localhost:44331/api/account',{headers : tokenHeader});
  }
}
