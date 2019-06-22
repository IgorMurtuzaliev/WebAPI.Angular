import { Component, OnInit } from '@angular/core';
import { ProfileService } from './shared/profile.service';
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private hubConnection: HubConnection;
  token = localStorage.getItem("token");
  ngOnInit() {
    this.hubConnection = new HubConnectionBuilder().withUrl("https://localhost:44331/echo", {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets, accessTokenFactory: () => this.token
    }).build();
    this.hubConnection.start()
    .then(() => { console.log("Connection started"); })
    .catch(err => { console.error(err); });
  }
}
