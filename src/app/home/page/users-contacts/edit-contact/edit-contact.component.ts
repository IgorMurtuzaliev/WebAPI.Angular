import { Component, OnInit,Input } from '@angular/core';
import { ContactService } from '../../../shared/contact.service'
import { ContactsComponent } from 'src/app/home/contacts/contacts.component';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  @Input() contact:any;
  constructor(private service: ContactService ,private contacts:ContactsComponent) { }

  ngOnInit() {
  }
  onEdit(Id) {
    this.service.editContactName(Id).subscribe(
      res => {
this.contacts.ngOnInit();
      },
      err => {
        console.log(err);
      }
    )
  }
}
