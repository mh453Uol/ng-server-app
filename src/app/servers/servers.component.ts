import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList} from '@angular/core';
import {Server, Status, ServerType} from 'src/app/server/server.model';
import {ServerComponent} from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // encapsulation: ViewEncapsulation.None (No view encapulation i.e element dont not have ng-content-xyz)
  // encapsulation: ViewEncapsulation.Emulated (default adds ng-content-xyz)
  // encapsulation: ViewEncapsulation.ShadowDom (not supported by all browsers)
})
export class ServersComponent implements OnInit, AfterViewInit {

  allowAddNewServer = false;
  currentServer: Server;
  servers: Server[] = [];
  isEdit = false;

  status = Status;
  serverType = ServerType;

  @ViewChildren(ServerComponent) serversCompoenents: QueryList<ServerComponent>;

  ngAfterViewInit(): void {
    this.serversCompoenents.changes.subscribe(s => {
      this.serversCompoenents.map(s => {
        s.edit.subscribe(complete => {
        });
      });
    });
  }

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
    console.log(this.serversCompoenents);
  }

  onEditServer(server: Server) {
    this.isEdit = true;
    this.currentServer = server;
  }
  ngOnInit() {}
}
