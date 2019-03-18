import {text} from '@angular/core/src/render3/instructions';

export class Account {
  name: string;
  status: number;
  id: number;

  constructor(name: string, status: number) {
    this.name = name;
    this.status = status;
    this.id = Math.floor(Math.random() * 255 + 1);
  }

  get textualStatus(): string {
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
    return textual;
  }
}
