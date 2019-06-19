import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
  getDialogs(): Observable<any> {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get('https://localhost:44331/api/chat/dialogs', { headers: tokenHeader });
  }
  getDialog(Id): Observable<any> {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get('https://localhost:44331/api/chat/dialog/'+Id, { headers: tokenHeader });
  }
}
