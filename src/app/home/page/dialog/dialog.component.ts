import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  id: string;
  token = localStorage.getItem("token");
  private hubConnection: HubConnection;
  constructor(private activeRoute:ActivatedRoute ) 
  { this.id = activeRoute.snapshot.params["id"]; }
  message: string = '';
  messages: string[] = [];
  ngOnInit() {
    this.hubConnection = new HubConnectionBuilder().withUrl("https://localhost:44331/echo",{skipNegotiation: true,
    transport: HttpTransportType.WebSockets, accessTokenFactory: () => this.token } ).build();
    this.hubConnection.on("Send", (msg) => {
      this.messages.push(msg);
    });
    this.hubConnection.on("SendMyself", (msg) => {
      this.messages.push(msg);
    });
    this.hubConnection.start()
    .then(() => { console.log("Connection started"); })
    .catch(err => { console.error(err); });
  }
  echo() {
    this.hubConnection.invoke("Send", this.message, this.id);
  }
}
