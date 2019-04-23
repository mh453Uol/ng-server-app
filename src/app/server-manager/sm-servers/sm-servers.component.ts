import { ServersService } from './../servers-service.service';
import { ServerV2 } from './../models/serverV2.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm-servers',
  templateUrl: './sm-servers.component.html',
  styleUrls: ['./sm-servers.component.css']
})
export class SmServersComponent implements OnInit {
  servers: ServerV2[] = [];

  constructor(private service: ServersService) {}

  ngOnInit() {
    this.servers = this.service.servers;
  }
}
