import { Injectable } from '@angular/core';
import  {HttpClient}from "@angular/common/http";
import { FormBuilder } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient){}
  search(query):Observable<any>{
    let tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get('https://localhost:44331/api/search?search='+ query, {headers : tokenHeader});
  }
  
  addToContacts(id):Observable<any>{
    let tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get('https://localhost:44331/api/contact/add/'+ id, {headers : tokenHeader});
  }

  goToProfile(id:string){
    let tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get('https://localhost:44331/api/users/'+ id,{headers : tokenHeader});
  }
}
