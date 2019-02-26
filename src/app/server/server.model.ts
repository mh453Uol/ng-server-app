export enum Status {
  Offline,
  Online
}

export class Server {
  constructor() {
    this.status = Status.Offline;
  }
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
