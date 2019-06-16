import { Component, OnInit } from '@angular/core';
import {BlackListService} from '../../../shared/black-list.service'
import { UserprofileService } from 'src/app/home/shared/userprofile.service';
import { UsersContactsComponent } from '../users-contacts.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-black-list',
  templateUrl: './black-list.component.html',
  styleUrls: ['./black-list.component.css']
})
export class BlackListComponent implements OnInit {
blocklist;
  constructor(private service: BlackListService, private userProfile:UserprofileService, private toastr: ToastrService) { }
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
        this.blocklist = res;
        this.ngOnInit();   
        this.toastr.success("You unlocked this user!","Success");     
      },
      err=>{
        console.log(err);
        this.toastr.error(err.error,"Failed")
      }
    )
   }
}
