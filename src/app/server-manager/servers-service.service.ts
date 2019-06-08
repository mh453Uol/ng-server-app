import { Injectable } from '@angular/core';
import { ServerV2 } from './models/serverV2.model';
import { Status } from '../server/server.model';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  public servers = [
    new ServerV2(1, 'epo onprem', Status.Online),
    new ServerV2(2, 'epo aws cloud', Status.Online),
    new ServerV2(3, 'epo heroku', Status.Online)
  ];

  public users = [
    new User('majid'),
    new User('adam')
  ];

  constructor() {}
}
