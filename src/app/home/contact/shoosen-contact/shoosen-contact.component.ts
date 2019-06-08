import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../shared/contact.service'
@Component({
  selector: 'app-shoosen-contact',
  templateUrl: './shoosen-contact.component.html',
  styleUrls: ['./shoosen-contact.component.css']
})
export class ShoosenContactComponent implements OnInit {
  id:string;
  contact;
  constructor(activeRoute: ActivatedRoute, private service: ContactService) { 
    this.id = activeRoute.snapshot.params["id"];
  }
  

  ngOnInit() {
    this.service.getContact(this.id).subscribe(
      res=>{
        this.contact = res;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
