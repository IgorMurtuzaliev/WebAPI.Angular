import { Component, OnInit } from '@angular/core';
import{ProfileService} from 'src/app/home/shared/profile.service'
import { Router } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails;
  FileToUpload : File = null;
  constructor(private service:ProfileService, private router:Router) { }

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
onSelected(event){
  this.FileToUpload = event.target.files[0];
}
onImage(Image){
  this.service.upload(this.FileToUpload).subscribe(
    res=>{
      this.ngOnInit();
      this.router.navigateByUrl('/home/page/profile');
    },
    err=>{
      console.log(err);
    }
  )
}
onSubmit()
{
  this.service.edit().subscribe(
    (res: any) => {
      this.ngOnInit();
      this.router.navigateByUrl('/home/page/profile');
    },
    err=>{
      console.log(err);
    }
     );
    }
}
