import { ServerV2 } from './../models/serverV2.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm-servers',
  templateUrl: './sm-servers.component.html',
  styleUrls: ['./sm-servers.component.css']
})
export class SmServersComponent implements OnInit {
  servers: ServerV2[] = [];

  constructor() { }

  ngOnInit() {
    this.servers = [
      new ServerV2(1, 'epo onprem', 0),
      new ServerV2(2, 'epo aws cloud', 0),
      new ServerV2(3, 'epo heroku', 1)
    ];
  }

}
