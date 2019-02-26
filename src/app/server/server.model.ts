export enum Status {
  Online,
  Offline
}

export class Server {
  constructor() {}
  // constructor(id: number, name: string, status: Status) {
  //   this.id = id;
  //   this.name = name;
  //   this.status = status;
  // }
  name: string;
  ip: string;
  id: number;
  status: Status;
}
