export class ListItem {
  id: string;
  name: string;

  constructor(name: string) {
    this.name = name;
    this.id = Math.round(Math.random() * 10000).toString();
  }
}
