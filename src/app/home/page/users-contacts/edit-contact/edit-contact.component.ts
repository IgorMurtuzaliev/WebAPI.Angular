import { Component, OnInit,Input } from '@angular/core';
import { ContactService } from '../../../shared/contact.service'
import { UsersContactsComponent } from '../users-contacts.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  @Input() contact:any;
  constructor(private service: ContactService ,private contacts:UsersContactsComponent,private router:Router) { }

  ngOnInit() {
  }
  onEdit(Id) {
    this.service.editContactName(Id).subscribe(
      res => {
     this.contacts.ngOnInit();
     this.router.navigateByUrl('/home/page/contacts')
      },
      err => {
        console.log(err);
      }
    )
  }
  onClose(){
    this.router.navigateByUrl('/home/page/contacts')
  }
}
