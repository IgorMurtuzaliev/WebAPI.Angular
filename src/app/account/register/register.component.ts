import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/shared/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(public service: RegisterServiceService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

}
