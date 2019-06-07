import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedService } from '../../account/shared/logged.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private token:boolean;
  constructor(private router:Router, private sharedService: LoggedService) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.token = true;
    }else this.token = false
  }
  
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
