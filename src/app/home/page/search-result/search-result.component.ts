import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/home/shared/search.service'
import { UserprofileService } from '../../shared/userprofile.service';
import { ContactsComponent } from '../../contacts/contacts.component';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../../shared/contact.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private service: SearchService, private toastr: ToastrService, private contactsService: ContactService, private contacts: ContactsComponent) { }

  users: any[];
  ngOnInit() {

  }

  onSubmit(query: string) {
    this.service.search(query).subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      },
      err => {
        console.log(err);
      }
    );
  }

  onAdd(Id) {
    this.contactsService.addToContacts(Id).subscribe(
      res => {
        this.contacts.ngOnInit();
        this.toastr.success("User added to your contacts successfully", "Success");
      },
      err => {
        console.log(err);
        this.toastr.error(err.description, "Failed");
      }
    );
  }

}
