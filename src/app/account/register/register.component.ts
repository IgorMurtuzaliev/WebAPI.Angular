import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/account/shared/register.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(public service: RegisterService, private fb:FormBuilder, private toastr:ToastrService, private router:Router ) {}

  ngOnInit() {
    this.service.formModel.reset();
  }
  onSubmit()
  {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('Please, confirm your email!','Register is successfully');
          this.router.navigateByUrl('/login');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
               this.toastr.error('This email is already taken!');
                break;
              default:
              this.toastr.error(element.description,'Error!');
                break;
            }
          });
          
        }
      },
    err=>{
      console.log(err);
         }
   );
 }
}
