export class ServerV2 {
    name: string;
    id: number;
    status: number;

    constructor(id: number = null, name: string = '', status: number = 0) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}
