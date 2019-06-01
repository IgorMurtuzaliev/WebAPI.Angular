import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../shared/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  externalProviderWindow = null;
  formModel={
    Email:'',
    Password:''
  }
  constructor(private service:RegisterService, private router:Router ) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null) this.router.navigateByUrl('/home')
  }

  onSubmit(form: NgForm){
this.service.login(form.value).subscribe(
  (res:any)=>{
    localStorage.setItem('token', res.token); 
    this.router.navigateByUrl('/home');
  },
  err=>{console.log(err);}
);
  }
}