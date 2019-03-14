import { text } from '@angular/core/src/render3/instructions';

export class Account {
  name: string;
  status: number;

  constructor(name: string, status: number) {
    this.name = name;
    this.status = status;
  }

  get textualStatus() {
    let textual: string;
    switch (this.status) {
      case 0: {
        textual = 'Active';
        break;
      }
      case 1: {
        textual = 'In-Active';
        break;
      }
      case 2: {
        textual = 'Hidden';
        break;
      }
    }
    console.log(textual, this.status);
    return textual;
  }
}
