import { Component, OnInit } from '@angular/core';
import{ProfileService} from 'src/app/home/shared/profile.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
