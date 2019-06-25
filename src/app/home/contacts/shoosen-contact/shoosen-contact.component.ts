import { Component, OnInit,Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserprofileService } from '../../shared/userprofile.service';
import { ContactService } from '../../shared/contact.service'
import { ContactsComponent } from '../contacts.component';
@Component({
  selector: 'app-shoosen-contact',
  templateUrl: './shoosen-contact.component.html',
  styleUrls: ['./shoosen-contact.component.css']
})
export class ShoosenContactComponent implements OnInit {
  @Input() contact:any;
  id:number;
  user;
  constructor(private service: ContactService,private userProfile:UserprofileService, private toastr:ToastrService) { 
  }
  contacts: ContactsComponent
  ngOnInit() {
  }
  onDelete(Id:string){
    this.service.deleteContact(Id).subscribe(
      res=>{         
        this.toastr.success("Contact was deleted succesfully", "Deleting")
        this.contacts.ngOnInit();
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        this.toastr.error(err.error, "Failed")
      },
    );
  }

  onBlock(Id) {
    this.userProfile.blockUser(Id).subscribe(
      res=>{
        this.user = res;
        this.toastr.success("Contact was blocked", "Blocked")     
      },
      err=>{
        console.log(err);
        this.toastr.error(err.error, "Failed")
      }
    )
   }

}
