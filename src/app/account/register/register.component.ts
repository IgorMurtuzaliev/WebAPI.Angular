import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/account/shared/register.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  formModel: FormGroup;
  constructor(public service: RegisterService, private fb:FormBuilder) {
      this.formModel = this.fb.group({
      Name :['',Validators.required],
      Surname :['',Validators.required],
      Email :['',[Validators.required, Validators.email]],
      Phone :['',Validators.required],
      Passwords:this.fb.group({
      Password :['',[Validators.required, Validators.minLength(6)]],
      PasswordConfirm :['',Validators.required]
      }, {validator: this.service.comparePasswords(this.formModel)})  
    });
   }

  ngOnInit() {
    this.formModel.reset();
  }
 onSubmit()
 {
   this.service.register(this.formModel).subscribe
   (
    (res:any)=>{
      if(res.succeded){
        this.formModel.reset();
      }
    },
    err=>{
      console.log(err);
         }
   );
 }
}
