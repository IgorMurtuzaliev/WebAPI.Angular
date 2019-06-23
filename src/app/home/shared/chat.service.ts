import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { MessageModel } from './MessageModel';
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
  sendMessage(form:MessageModel){
    var formData = new FormData();
    formData.append('Text', form.text);
    formData.append('ReceiverId', form.receiverId);
    form.attachment.forEach(element => {
      formData.append('Attachment', element);
    });
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.post('https://localhost:44331/api/chat/sendMessage', formData, { headers: tokenHeader });
  }
  deleteDialog(dialogId){
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get('https://localhost:44331/api/chat/delete/'+ dialogId, { headers: tokenHeader });
  }
}
