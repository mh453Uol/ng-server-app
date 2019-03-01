import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Server, Status, ServerType} from 'src/app/server/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // encapsulation: ViewEncapsulation.None (No view encapulation i.e element dont not have ng-content-xyz)
  // encapsulation: ViewEncapsulation.Emulated (default adds ng-content-xyz)
  // encapsulation: ViewEncapsulation.ShadowDom (not supported by all browsers)
})
export class ServersComponent implements OnInit {
  allowAddNewServer = false;
  currentServer: Server;
  servers: Server[] = [];
  isEdit = false;

  status = Status;
  serverType = ServerType;

  constructor() {
    // after 2000 ms (2 secs) toggle button
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 1);

    this.currentServer = new Server();
  }
  onUpdateClick() {
    console.log(this.servers);
    const index = this.servers.findIndex(s => s === this.currentServer);
    this.currentServer[index] = this.currentServer;
    this.currentServer = new Server();
  }

  onAddButtonClick() {
    this.servers.push(this.currentServer);
    this.currentServer = new Server();
  }

  onEditServer(server: Server) {
    this.isEdit = true;
    this.currentServer = server;
  }
  ngOnInit() {}
}
