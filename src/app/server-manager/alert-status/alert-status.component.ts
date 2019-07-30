import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-status',
  templateUrl: './alert-status.component.html',
  styleUrls: ['./alert-status.component.css']
})
export class AlertStatusComponent implements OnInit {
  servers = [];
  filteredStatus = '';

  constructor() {
    this.servers = [
      {
        instanceType: 'medium',
        name: 'Production Server',
        status: 'stable',
        started: new Date(15, 1, 2017)
      },
      {
        instanceType: 'large',
        name: 'User Database',
        status: 'stable',
        started: new Date(15, 1, 2017)
      },
      {
        instanceType: 'small',
        name: 'Development Server',
        status: 'offline',
        started: new Date(15, 1, 2017)
      },
      {
        instanceType: 'medium',
        name: 'Cache (Reddis) Server',
        status: 'stable',
        started: new Date(15, 1, 2017)
      }
    ];
  }

  getStatusClasses(sever: {
    instanceType: string;
    name: string;
    status: string;
    stated: Date;
  }) {
    return {
      'list-group-item-success': sever.status === 'stable',
      'list-group-item-warning': sever.status === 'offline',
      'list-group-item-danger': sever.status === 'critical'
    };
  }

  ngOnInit() {}
}
