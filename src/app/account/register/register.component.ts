import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(public service: RegisterService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }
 onSubmit()
 {
   this.service.register().subscribe
   (
    (res:any)=>{
      if(res.succeded){
        this.service.formModel.reset();
      }
    },
    err=>{
      console.log(err);
         }
   );
 }
}
