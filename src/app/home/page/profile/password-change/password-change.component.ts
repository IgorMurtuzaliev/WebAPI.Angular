import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/home/shared/profile.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  constructor(private service: ProfileService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    debugger
    this.service.editPassword().subscribe(
      (res: any) => {
        this.ngOnInit();
        this.router.navigateByUrl('/home/page/profile');
        this.toastr.success("Password was edited", "Success");
      },
      err => {
        console.log(err);
        this.toastr.error(err.error, "Failed")
      }
    );
  }
}
