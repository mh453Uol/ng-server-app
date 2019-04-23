import { ServersService } from './../../servers-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Server } from './../../../server/server.model';
import { Component, OnInit, Query } from '@angular/core';
import { ServerV2 } from '../../models/serverV2.model';
@Component({
  selector: 'app-sm-edit-server',
  templateUrl: './sm-edit-server.component.html',
  styleUrls: ['./sm-edit-server.component.css']
})
export class SmEditServerComponent implements OnInit {
  server: ServerV2 = new ServerV2();
  hash: string;
  constructor(private route: ActivatedRoute, private service: ServersService) {
    let id: number;

    this.route.params.subscribe((params: Params) => {
      id = +params['id'];
      this.server = this.service.servers.find(s => s.id === id);
    });

    this.route.queryParams.subscribe((q: Query) => {
      this.hash = q['hash'];
    });
  }

  ngOnInit() {}
}
