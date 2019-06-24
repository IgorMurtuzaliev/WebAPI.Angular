import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { MessageModel } from './MessageModel';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private linkSource = new BehaviorSubject<string>("")
  currentLink = this.linkSource.asObservable(); 
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
    formData.append('Link', form.userLink);
    form.attachment.forEach(element => {
      formData.append('Attachment', element);
    });
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.post('https://localhost:44331/api/chat/sendMessage', formData, { headers: tokenHeader });
  }
  share(form:MessageModel){
    var formData = new FormData();
    formData.append('ReceiverId', form.receiverId);
    formData.append('Link', form.userLink);
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.post('https://localhost:44331/api/chat/shareUserLink', formData, { headers: tokenHeader });
  }
  resend(form:MessageModel){
    var formData = new FormData();
    formData.append('ReceiverId', form.receiverId);
    formData.append('MessageId', form.messId);
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.post('https://localhost:44331/api/chat/resendMessage', formData, { headers: tokenHeader });
  }
  deleteDialog(dialogId){
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get('https://localhost:44331/api/chat/delete/'+ dialogId, { headers: tokenHeader });
  }
  shareLink(link:string){
    this.linkSource.next(link);
  }
  resendMessage(message:string){
    this.linkSource.next(message);
  }
}
