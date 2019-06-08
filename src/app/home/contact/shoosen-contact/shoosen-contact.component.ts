import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../shared/contact.service'
@Component({
  selector: 'app-shoosen-contact',
  templateUrl: './shoosen-contact.component.html',
  styleUrls: ['./shoosen-contact.component.css']
})
export class ShoosenContactComponent implements OnInit {
  id:number;
  contact:any;
  constructor(activeRoute: ActivatedRoute, private service: ContactService) { 
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
  }
  

  ngOnInit() {
    if(this.id){
       this.service.getContact(this.id).subscribe(
      res=>{
        this.contact = res;
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
    }
   
  }

}
