import { Server } from './../../../server/server.model';
import { Component, OnInit } from '@angular/core';
import {ServerV2} from '../../models/serverV2.model';

@Component({
  selector: 'app-sm-edit-server',
  templateUrl: './sm-edit-server.component.html',
  styleUrls: ['./sm-edit-server.component.css']
})
export class SmEditServerComponent implements OnInit {

  server: ServerV2 = new ServerV2();

  constructor() { }

  ngOnInit() {
  }

}
