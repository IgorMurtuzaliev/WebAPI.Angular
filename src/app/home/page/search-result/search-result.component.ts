import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/home/shared/search.service'
import { UserprofileService } from '../../shared/userprofile.service';
import { ContactsComponent } from '../../contacts/contacts.component';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../../shared/contact.service';
import { ActivatedRoute } from "@angular/router";
import { ChatService } from '../../shared/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchQuery: any;
  constructor(private userProfile: UserprofileService, private service: SearchService, private toastr: ToastrService,
    private contactsService: ContactService, private contacts: ContactsComponent, private activeRoute: ActivatedRoute,
    private chatService: ChatService, private router:Router) {

  }
  user;
  users: any[];
  ngOnInit() {
    console.log('rendered')
    this.searchQuery = this.activeRoute.snapshot.params["searchQuery"];
    this.service.search(this.searchQuery).subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit(query: string) {

  }

  onBlock(Id) {
    this.userProfile.blockUser(Id).subscribe(
      res => {
        this.user = res;
      
        this.ngOnInit();
        this.toastr.success("You blocked this user", "Success");
      },
      err => {
        console.log(err);
        this.toastr.error(err.error, "Failed");
      }
    )
  }

  onUnlock(Id) {
    this.userProfile.unlockUser(Id).subscribe(
      res => {
        this.user = res;
        this.ngOnInit();
        this.toastr.success("You unlocked this user", "Success");
      },
      err => {
        this.toastr.error(err.error, "Failed");
        console.log(err);
      }
    )
  }
  onAdd(Id) {
    this.contactsService.addToContacts(Id).subscribe(
      res => {
        this.contactsService.getContactsData(res);
        this.ngOnInit();
        this.toastr.success("User added to your contacts successfully", "Success");
      },
      err => {
        console.log(err);
        this.toastr.error(err.error, "Failed");
      }
    );
  }

  onDelete(Id: string) {
    this.contactsService.deleteContact(Id).subscribe(
      res => {
        this.contactsService.getContactsDataForDeleting(res);
        this.ngOnInit();
        this.toastr.success("Contact was deleted succesfully", "Deleting")
      },
      err => {
        console.log(err);
        this.toastr.error(err.error, "Failed")
      },
    );
  }

  onShare(userLink: string) {
    this.chatService.shareLink(userLink);
    this.router.navigateByUrl('/home/page/dialogs');
  }

}
