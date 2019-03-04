import {Component, OnInit, Input, Output, EventEmitter, DoCheck, OnChanges, SimpleChanges} from '@angular/core';
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
export class ServerComponent implements OnInit, OnChanges {
  @Input() server: Server;
  @Output() edit = new EventEmitter();

  @Input() num = 0;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  onEdit() {
    this.edit.emit(this.server);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

  onRandom() {
    this.num = this.num + 1;
  }
}
