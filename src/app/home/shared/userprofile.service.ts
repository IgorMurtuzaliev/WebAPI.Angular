import { Injectable } from '@angular/core';
import  {HttpClient}from "@angular/common/http";
import { FormBuilder } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http:HttpClient) { }

  // getUserProfile(id){
  //   let tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  //   return this.http.get('https://localhost:44331/api/users/'+ id, {headers : tokenHeader});
  // }

  blockUser(id): Observable<any> {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get('https://localhost:44331/api/users/block/' + id, { headers: tokenHeader });
  }
  
  unlockUser(id): Observable<any> {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get('https://localhost:44331/api/users/unlock/' + id, { headers: tokenHeader });
  }

}
