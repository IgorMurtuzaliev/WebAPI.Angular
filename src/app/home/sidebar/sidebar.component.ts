import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/home/shared/profile.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userDetails;
  constructor(private service: ProfileService, private router: Router, ) { }

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
  onProfile() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  onSearch() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
