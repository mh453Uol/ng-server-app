import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Server, Status } from 'src/app/server/server.model';

// @xyz is a decorator
@Component({
  // app-xyz to stop issue with third party components
  selector: 'app-server',
  // selector as a attribute so when using it we do <div app-server></div>
  // selector: [app-server],
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  public status = Status;
  @Input() server: Server = null;
  @Output() removeServer = new EventEmitter();
  @Output() updateField = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onHelloWorld() {
    console.log('HelloWorld');
  }

  onRemoveServer() {
    this.removeServer.emit(this.server);
  }

  onUpdateField(key, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.server[key] = value;
    // this.updateField.emit({ key: key, value: value });
  }
}
