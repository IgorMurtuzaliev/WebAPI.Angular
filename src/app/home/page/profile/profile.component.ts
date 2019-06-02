import { Component, OnInit } from '@angular/core';
import{ProfileService} from 'src/app/home/shared/profile.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
