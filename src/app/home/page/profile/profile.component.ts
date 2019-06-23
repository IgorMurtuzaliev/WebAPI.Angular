import { Component, OnInit } from '@angular/core';
import{ProfileService} from 'src/app/home/shared/profile.service'
import { Router } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  providers: [HeaderComponent],
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails;
  FileToUpload : File = null;
  constructor(private service:ProfileService, private router:Router, private toastr: ToastrService,private header:HeaderComponent) { }
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
      this.header.ngOnInit();
      this.toastr.success("Profile information was edited", "Deleting")
    },
    err=>{
      console.log(err);
      this.toastr.error(err.error, "Deleting")
    }
     );
    }
}
