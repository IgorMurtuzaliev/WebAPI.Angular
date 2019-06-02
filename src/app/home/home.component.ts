import { Component, OnInit } from '@angular/core';
import { ProfileService } from './shared/profile.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails;
  constructor(private service:ProfileService) { }

  ngOnInit() {
    this.service.getProfile().subscribe(
      res=>{
        this.userDetails = res;     
      },
      err=>{
        console.log(err);
      },
    );
  }
}
