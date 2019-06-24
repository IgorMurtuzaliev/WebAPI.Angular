import { Component, OnInit } from '@angular/core';
import{ContactService} from '../shared/contact.service'
import { ShoosenContactComponent } from './shoosen-contact/shoosen-contact.component';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import{Popup} from 'ng2-opd-popup'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts;
  constructor(private service:ContactService, private s:ShoosenContactComponent,private toastr:ToastrService,private popup:Popup) { }
  _contact:any;
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
  onPopupDelete(){
  this.popup.show();
  }
  onDelete(Id:string){
    this.service.deleteContact(Id).subscribe(
      res=>{ 
        this.ngOnInit();
        this.toastr.success("Contact was deleted succesfully", "Deleting")
      },
      err=>{
        console.log(err);
        this.toastr.error(err.error, "Failed")
      },
    );
  }

  onConfirm(Id:string){
    this.service.confirmContact(Id).subscribe(
      res=>{ 
        this.ngOnInit();
        this.toastr.success("User was successfully added to your contacts", "Confirm")
      },
      err=>{
        console.log(err);
        this.toastr.error(err.error, "Failed")
      },
    );
  }

  showContact(_contact){
      this.contact = _contact
  }
  }
