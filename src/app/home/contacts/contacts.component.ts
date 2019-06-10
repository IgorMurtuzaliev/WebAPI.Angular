import { Component, OnInit } from '@angular/core';
import{ContactService} from '../shared/contact.service'
import { ShoosenContactComponent } from './shoosen-contact/shoosen-contact.component';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts;
  constructor(private service:ContactService, private s:ShoosenContactComponent,private toastr:ToastrService) { }
   cont:any;
   private contact: any;
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
        this.toastr.success("Contact was deleted succesfully", "Deleting")
      },
      err=>{
        console.log(err);
        this.toastr.error(err.description, "Failed")
      },
    );
  }
 log(cont){
    this.contact = cont
 }
  }