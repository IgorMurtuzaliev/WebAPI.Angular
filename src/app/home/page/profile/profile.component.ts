import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/home/shared/profile.service'
import { Router } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from '../../shared/header.service';
import {Popup} from 'ng2-opd-popup'
@Component({
  providers: [HeaderComponent],
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails;
  FileToUpload: File = null;

  constructor(private service: ProfileService, private router: Router, private toastr: ToastrService, private header: HeaderService, private popup:Popup) { }

  
  ngOnInit() {
    this.service.getProfile().subscribe(
      res => {
        this.header.getData(res)
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  
  onSelected(event) {
    this.FileToUpload = event.target.files[0];
  }
  onImage(Image) {
    this.service.upload(this.FileToUpload).subscribe(
      res => {
        this.ngOnInit();

        this.router.navigateByUrl('/home/page/profile');
      },
      err => {
        console.log(err);
      }
    )
  }
  omClosePopup(){
    this.popup.hide();
  }
  onChangePaswordForm(){
    this.popup.show();
    this.popup.options = {
      header: "Change your password",
      color: "#2c63b4", 
      widthProsentage: 40, 
      animationDuration: 1, 
      showButtons: false, 
      cancleBtnContent: "Cancel", 
      animation: "fadeInDown" 
  };
  }
  onChangePassword() {
    this.service.editPassword().subscribe(
      (res: any) => {
        this.ngOnInit();
        this.router.navigateByUrl('/home/page/profile');
        this.toastr.success("Password was edited", "Success");
        this.popup.hide();
      },
      err => {
        console.log(err);
        this.toastr.error(err.error, "Failed")
      }
    );
  }
  onSubmit() {
    this.service.edit().subscribe(
      (res: any) => {
        this.ngOnInit();
        this.router.navigateByUrl('/home/page/profile');
        this.toastr.success("Profile information was edited", "Deleting")
      },
      err => {
        console.log(err);
        this.toastr.error(err.error, "Deleting")
      }
    );
  }

}

