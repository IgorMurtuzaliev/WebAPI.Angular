import { Component, OnInit } from '@angular/core';
import {BlackListService} from '../../../shared/black-list.service'
import { UserprofileService } from 'src/app/home/shared/userprofile.service';
import { UsersContactsComponent } from '../users-contacts.component';
@Component({
  selector: 'app-black-list',
  templateUrl: './black-list.component.html',
  styleUrls: ['./black-list.component.css']
})
export class BlackListComponent implements OnInit {
blocklist;
  constructor(private service: BlackListService, private userProfile:UserprofileService,private contacts:UsersContactsComponent) { }
  blockedUsers;
  ngOnInit() {
    this.service.getBlackList().subscribe(
      res=>{
        this.blockedUsers = res;     
        console.log(this.blockedUsers);
      },
      err=>{
        console.log(err);
      },
    );
  }
  onUnblock(Id) {
    this.userProfile.unlockUser(Id).subscribe(
      res=>{
this.contacts.ngOnInit();
        this.blocklist = res;
        this.ngOnInit();        
      },
      err=>{
        console.log(err);
      }
    )
   }
}
