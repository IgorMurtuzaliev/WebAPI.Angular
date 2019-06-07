import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedService } from '../../account/shared/logged.service';
import { ProfileService } from 'src/app/home/shared/profile.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private token:boolean;
  constructor(private router:Router, private sharedService: LoggedService,private service: ProfileService,) { }
  userDetails;
  ngOnInit() {
    this.service.getProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
