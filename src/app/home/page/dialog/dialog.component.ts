import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';
import { ChatService } from '../../shared/chat.service';
import { MessageInfo } from '../../shared/MessageInfo';
import { MessageModel } from '../../shared/MessageModel';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  private hubConnection: HubConnection;
  constructor(private activeRoute: ActivatedRoute, private service: ChatService, private toastr: ToastrService) { this.id = activeRoute.snapshot.params["id"]; }
  message: string = '';
  messages: any[] = [];
  images: File[] = [];
  dialog;
  id: string;
  dropzone:any;
  token = localStorage.getItem("token");
link:string;
  onFilesAdded(files: File[]) {
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const content = (e.target as FileReader).result;
        };
        reader.readAsDataURL(file);
    });
    this.images = files;
  }

  ngOnInit() {
    this.onGetList(this.id);
    this.service.currentLink.subscribe(link=>this.link = link);
    this.hubConnection = new HubConnectionBuilder().withUrl("https://localhost:44331/echo", {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets, accessTokenFactory: () => this.token
    }).build();
    this.hubConnection.start()
      .then(() => { console.log("Connection started"); })
      .catch(err => { console.error(err); });
    this.onSendListener();
    this.onSendMyselfListener();
  }

  echo() {
    var form = new MessageModel();
    form.receiverId = this.id;
    form.text = this.message;
    form.attachment = this.images;
    this.service.sendMessage(form).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
    );
  }
  share() {
    var form = new MessageModel();
    form.receiverId = this.id;
    form.userLink =this.link;
    this.service.share(form).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
        this.toastr.error(err.error, "Failed")
      },
    );
  }
  

  onGetList(Id) {
    this.service.getDialog(Id).subscribe(
      res => {
        this.dialog = res;
        console.log(this.dialog);
      },
      err => {
        console.log(err);
      },
    );
  }

  onSendListener() {
    this.hubConnection.on("Send", (msg) => {
      var messageInfo = new MessageInfo();
      messageInfo.mess = msg;
      messageInfo.user = 'user';
      messageInfo.date = new Date().toString();
      this.messages.push(messageInfo);
    });
  }

  onSendMyselfListener() {
    this.hubConnection.on("SendMyself", (msg) => {
      var messageInfo = new MessageInfo();
      messageInfo.mess = msg;
      messageInfo.user = 'you';
      messageInfo.date = new Date().toTimeString();
      this.messages.push(messageInfo);
    });
  }
}
