import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';
import { ChatService } from '../../shared/chat.service';
import { MessageInfo } from '../../shared/MessageInfo';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  dialog;
  id: string;

  token = localStorage.getItem("token");
  private hubConnection: HubConnection;

  constructor(private activeRoute: ActivatedRoute, private service: ChatService) { this.id = activeRoute.snapshot.params["id"]; }
  message: string = '';
  messages: any[] = [];

  ngOnInit() {
    this.onGetList(this.id);

    this.hubConnection = new HubConnectionBuilder().withUrl("https://localhost:44331/echo", {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets, accessTokenFactory: () => this.token
    }).build();

    this.hubConnection.on("Send", (msg) => {
      var messageInfo = new MessageInfo();
      messageInfo.mess = msg;
      messageInfo.user = 'user'; 
      messageInfo.date = new Date();
      this.messages.push(messageInfo);
    });

    this.hubConnection.on("SendMyself", (msg) => {
      var messageInfo = new MessageInfo();
      messageInfo.mess = msg;
      messageInfo.user = 'you';
      this.messages.push(messageInfo);
    });

    this.hubConnection.start()
      .then(() => { console.log("Connection started"); })
      .catch(err => { console.error(err); });
  }

  echo() {
    this.hubConnection.invoke("SendFaraway", this.message, this.id);
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
}
