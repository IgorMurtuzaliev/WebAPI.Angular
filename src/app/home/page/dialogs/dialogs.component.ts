import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../shared/chat.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {
dialogs;
  constructor(private service:ChatService) { }

  ngOnInit() {
    this.service.getDialogs().subscribe(
      res=>{
        this.dialogs = res;     
        console.log(this.dialogs);
      },
      err=>{
        console.log(err);
      },
    );
  }

}
