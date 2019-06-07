import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../../shared/userprofile.service';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../shared/search.service';

@Component({
  selector: 'app-usersprofiles',
  templateUrl: './usersprofiles.component.html',
  styleUrls: ['./usersprofiles.component.css']
})
export class UsersprofilesComponent implements OnInit {
id:string;
user;
  constructor(private userProfile: UserprofileService,activeRoute: ActivatedRoute, private search:SearchService) {
    this.id = activeRoute.snapshot.params["id"];
   }

  ngOnInit() {
   this.search.goToProfile(this.id).subscribe(
     res=>{
       this.user = res;
     },
     err=>{
       console.log(err);
     }
   )
  }
}
