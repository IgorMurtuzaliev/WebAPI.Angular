import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import  {HttpClient}from "@angular/common/http";
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContacts():Observable<any>{
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get('https://localhost:44331/api/contact/contacts',{headers : tokenHeader});
  }
  getContact(id:number):Observable<any>{
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get('https://localhost:44331/api/contact/icontact/' + id,{headers : tokenHeader});
  }
  deleteContact(id):Observable<any>{
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.delete('https://localhost:44331/api/contact/' + id,{headers : tokenHeader});
  }
}
