import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../shared/chat.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {
dialogs;
  constructor(private service:ChatService, private toastr:ToastrService) { }

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
  onDelete(Id) {
    this.service.deleteDialog(Id).subscribe(
      res=>{  
        this.toastr.success("You delete dialog!","Success");  
        this.ngOnInit();   
      },
      err=>{
        console.log(err);
        this.toastr.error(err.error,"Failed")
      }
    )
   }
}
