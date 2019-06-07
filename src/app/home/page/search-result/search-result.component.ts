import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/home/shared/search.service'
import { UserprofileService } from '../../shared/userprofile.service';
import { ContactsComponent } from '../../contacts/contacts.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private service: SearchService, private userprofile: UserprofileService) { }
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
    this.service.addToContacts(Id).subscribe(
      res => {
      },
      err => {
        console.log(err);
      }
    );
  }

}
