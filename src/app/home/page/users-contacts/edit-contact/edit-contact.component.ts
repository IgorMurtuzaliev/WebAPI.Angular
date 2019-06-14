import { Component, OnInit,Input } from '@angular/core';
import { ContactService } from '../../../shared/contact.service'
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  @Input() contact:any;
  constructor(private service: ContactService) { }

  ngOnInit() {
  }
  onEdit(Id) {
    this.service.editContactName(Id).subscribe(
      res => {
      },
      err => {
        console.log(err);
      }
    )
  }
}
