import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../../shared/userprofile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../shared/search.service';
import { ContactService } from '../../shared/contact.service';
import { ToastrService } from 'ngx-toastr';
import { ChatService } from '../../shared/chat.service';

@Component({
  selector: 'app-usersprofiles',
  templateUrl: './usersprofiles.component.html',
  styleUrls: ['./usersprofiles.component.css']
})
export class UsersprofilesComponent implements OnInit {
id:string;
user;
  constructor(private userProfile: UserprofileService,activeRoute: ActivatedRoute, private search:SearchService,
    private toastr:ToastrService,private contactsService:ContactService, private chatService:ChatService,
    private router:Router) {
    this.id = activeRoute.snapshot.params["id"];
   }

  ngOnInit() {
   this.search.goToProfile(this.id).subscribe(
     res=>{
       this.user = res;
     },
     err=>{
       console.log(err);
     }
   )
  }

  onBlock(Id) {
    this.userProfile.blockUser(Id).subscribe(
      res=>{
        this.ngOnInit();
        this.user = res;
        this.toastr.success("You blocked this user!","Success");
      },
      err=>{
        console.log(err);
        this.toastr.error(err.error,"Failed");
      }
    )
   }

   onUnlock(Id) {
    this.userProfile.unlockUser(Id).subscribe(
      res=>{
        this.ngOnInit();
        this.user = res;
        this.toastr.success("You unlocked this user!","Success");
      },
      err=>{
        console.log(err);
        this.toastr.error(err.error,"Failed");
      }
    )
   }
   onAdd(Id) {
    this.contactsService.addToContacts(Id).subscribe(
      res => {
        this.ngOnInit();
       this.toastr.success("User added to your contacts successfully","Success");
      },
      err => {
        console.log(err);
        this.toastr.error(err.error,"Failed");
      }
    );
  }
  onDelete(Id:string){
    this.contactsService.deleteContact(Id).subscribe(
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
  onShare(userLink: string) {
    this.chatService.shareLink(userLink);
    this.router.navigateByUrl('/home/page/dialogs');
  }
}
