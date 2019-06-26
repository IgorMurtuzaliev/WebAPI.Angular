import { Injectable } from '@angular/core';
import  {HttpClient}from "@angular/common/http";
import { FormBuilder } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSourse = new Subject<any>();
  currentQuery = this.searchSourse.asObservable();
  constructor(private http:HttpClient){}
  search(query):Observable<any>{
    let tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get('https://localhost:44331/api/search?search='+ query, {headers : tokenHeader});
  }
  goToProfile(id:string){
    let tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get('https://localhost:44331/api/users/'+ id,{headers : tokenHeader});
  }
  getSearch(data){
    this.searchSourse.next(data);
  }
}
