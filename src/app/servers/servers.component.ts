import { Component, OnInit } from '@angular/core';
import { Server, Status } from 'src/app/server/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: Server[] = [];

  constructor() {
    this.servers.push(new Server(1, 'Dev Machine', Status.Online));
    this.servers.push(new Server(2, 'Prod Machine', Status.Offline));
    this.servers.push(new Server(3, 'Staging Machine', Status.Offline));
  }

  ngOnInit() {}
}
