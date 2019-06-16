import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../shared/register.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  formModel={
    Login:'',
    Password:''
  }
  constructor(private service:RegisterService, private router:Router, private toastr:ToastrService ) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null) this.router.navigateByUrl('/home')
  }

  onSubmit(form: NgForm){
this.service.login(form.value).subscribe(
  (res:any)=>{
      localStorage.setItem('token', res.token); 
    this.router.navigateByUrl('/home/page/profile');
  },
  err=>{
    if(err.error == 'Confirm your email'){
      this.toastr.error(err.error,'Registration failed!')
      console.log(err);
    }
    else{
    this.toastr.error("Incorrect username or password",'Registration failed!')
    console.log(err);
    }

    }
   );
  }
}