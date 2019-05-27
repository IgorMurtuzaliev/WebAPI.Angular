import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  constructor() {}

  isLogged(){
    return localStorage.getItem('token')
  }
}
