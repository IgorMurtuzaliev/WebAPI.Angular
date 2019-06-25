import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private nameSource = new Subject<string>();
  currentName = this.nameSource.asObservable();
  private imgSource = new Subject<string>();
  currentImg = this.imgSource.asObservable();
  constructor(private http: HttpClient) { }
  disconnect():Observable<any>{
    let tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get('https://localhost:44331/api/account/disconnect',{headers : tokenHeader});
  }
  // changeName(name: string) {
  //   this.nameSource.next(name)
  //   }
  getData(data):any{
    console.log(data)
      this.nameSource.next(data)
  }
  getImgData(data):any{
    console.log(data)
      this.imgSource.next(data)
  }
}
