import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/home/shared/profile.service'
import { Router } from '@angular/router';
import {ProfileComponent} from '../../profile/profile.component'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.css']
})
export class AvatarUploadComponent implements OnInit {
  FileToUpload: File = null;
  constructor(private service: ProfileService, private router: Router, private profile: ProfileComponent, private toastr:ToastrService) { }

  ngOnInit() {
  }
  onSelected(event) {
    this.FileToUpload = event.target.files[0];
  }
  onImage(Image) {
    this.service.upload(this.FileToUpload).subscribe(
      res => {
        this.profile.ngOnInit();
        this.router.navigateByUrl('/home/page/profile');
        this.toastr.success("New image was uploaded", "Success")
      },
      err => {
        console.log(err);
        this.toastr.error(err.error, "Failed")
      }
    )
  }
}
