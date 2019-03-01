import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Server, Status} from 'src/app/server/server.model';

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
  @Input() server: Server;
  @Output() edit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onEdit() {
    this.edit.emit(this.server);
  }
}
