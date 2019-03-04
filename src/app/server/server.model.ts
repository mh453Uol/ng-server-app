export enum Status {
  Offline,
  Online
}

export enum ServerType {
  TIER_1,
  TIER_2
}

export class Server {
  name: string;
  ip: string;
  id: number;
  status: Status;
  type: ServerType;

  constructor() {
    this.type = ServerType.TIER_1;
    this.status = Status.Offline;
    this.name = '';
    this.ip = '';
  }
}
