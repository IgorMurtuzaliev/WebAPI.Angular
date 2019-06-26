import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsSource = new Subject<any>();
  currentContacts = this.contactsSource.asObservable();
  constructor(private http: HttpClient, private fb: FormBuilder, ) { }

  formModel = this.fb.group({
    ContactName: ''
  })

  addToContacts(id):Observable<any>{
    let tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get('https://localhost:44331/api/contact/add/'+ id, {headers : tokenHeader});
  }
  getContacts(): Observable<any> {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get('https://localhost:44331/api/contact/contacts', { headers: tokenHeader });
  }
  getContact(id: number): Observable<any> {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get('https://localhost:44331/api/contact/contact/' + id, { headers: tokenHeader });
  }
  deleteContact(id): Observable<any> {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.delete('https://localhost:44331/api/contact/' + id, { headers: tokenHeader });
  }
  confirmContact(id): Observable<any> {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get('https://localhost:44331/api/contact/confirm/' + id, { headers: tokenHeader });
  }

  editContactName(id) {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    var body = {
      ContactName: this.formModel.value.ContactName,
    };
    return this.http.put('https://localhost:44331/api/contact/'+id, body,{headers : tokenHeader});
  }
  getContactsData(data):any{
    console.log(data)
      this.contactsSource.next(data)
  }
}
