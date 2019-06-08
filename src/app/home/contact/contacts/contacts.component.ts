import { Component, OnInit } from '@angular/core';
import{ContactService} from '../../../home/shared/contact.service'
import { ShoosenContactComponent } from '../shoosen-contact/shoosen-contact.component';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts;
  constructor(private service:ContactService, private s:ShoosenContactComponent) { }

  ngOnInit() {
    this.service.getContacts().subscribe(
      res=>{
        this.contacts = res;     
        console.log(this.contacts);
      },
      err=>{
        console.log(err);
      },
    );
  }

  onDelete(Id:string){
    this.service.deleteContact(Id).subscribe(
      res=>{ 
        this.ngOnInit();
      },
      err=>{
        console.log(err);
      },
    );
  }
  onGet(Id:number) {
    this.service.getContact(Id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  }
