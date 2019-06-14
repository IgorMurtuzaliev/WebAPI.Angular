import { Component, OnInit } from '@angular/core';
import{ContactService} from '../../shared/contact.service'
import { ToastrService } from 'ngx-toastr';
import { UserprofileService } from '../../shared/userprofile.service';
@Component({
  selector: 'app-users-contacts',
  templateUrl: './users-contacts.component.html',
  styleUrls: ['./users-contacts.component.css']
})
export class UsersContactsComponent implements OnInit {
  contacts;
  constructor(private service:ContactService,private toastr:ToastrService, private userProfile: UserprofileService) { }
  _contact:any;
  user
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

  onConfirm(Id:string){
    this.service.confirmContact(Id).subscribe(
      res=>{ 
        this.ngOnInit();
        this.toastr.success("User was successfully added to your contacts", "Confirm")
      },
      err=>{
        console.log(err);
        this.toastr.error(err.description, "Failed")
      },
    );
  }

  onBlock(Id) {
    this.userProfile.blockUser(Id).subscribe(
      res=>{
        this.user = res;
        this.ngOnInit();       
      },
      err=>{
        console.log(err);
      }
    )
   }

  showContact(_contact){
      this.contact = _contact
  }
  editForm(_contact){
    this.contact = _contact;
  }
  }
