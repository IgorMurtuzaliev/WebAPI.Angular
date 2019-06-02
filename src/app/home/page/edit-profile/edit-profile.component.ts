import { Component, OnInit } from '@angular/core';
import{ProfileService} from 'src/app/home/shared/profile.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userDetails;
 
  constructor(private service:ProfileService,private router:Router) { }
  ngOnInit() {
    // this.service.getProfile().subscribe(
    //   res=>{
    //     this.userDetails = res;     
    //   },
    //   err=>{
    //     console.log(err);
    //   },
    // );
  }
  
  onSubmit()
  {
    this.service.edit().subscribe(
      (res: any) => {
        this.router.navigateByUrl('/home/page/profile');
      },
      err=>{
        console.log(err);
      }
       );
      }
}
