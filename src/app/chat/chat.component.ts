import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private hubConnection: HubConnection;

  message: string = '';
  messages: string[] = [];
  constructor() { }

  ngOnInit() {
    this.hubConnection = new HubConnectionBuilder().withUrl("https://localhost:44331/echo").build();
    this.hubConnection.on("Send", (msg) => {
      this.messages.push(msg);
    });
    this.hubConnection.start()
    .then(() => { console.log("Connection started"); })
    .catch(err => { console.error(err); });
  }
  echo() {
    this.hubConnection.invoke("Echo", this.message);
  }
}
