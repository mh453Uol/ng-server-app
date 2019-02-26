import { Component, OnInit } from '@angular/core';
import { Server, Status } from 'src/app/server/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddNewServer = false;
  servers: Server[] = [];

  constructor() {
    // after 2000 ms (2 secs) toggle button
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 1);
  }

  onAddButtonClick() {
    this.servers.push(new Server());
  }

  onRemoveServer(server: Server) {
    const index = this.servers.findIndex(s => s === server);

    if (index !== -1) {
      this.servers.splice(index, 1);
    }
  }
  ngOnInit() {}
}
