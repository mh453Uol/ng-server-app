export class ServerV2 {
    name: string;
    id: number;
    status: number;

    constructor(id: number, name: string, status: number) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}
