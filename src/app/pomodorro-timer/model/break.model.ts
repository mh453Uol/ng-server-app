import { Task } from './task.interface';
export class Break implements Task {
  durationInMinute;
  started: Date;
  endered: Date;

  constructor(duration: number) {
    this.durationInMinute = duration;
  }

  start() {
    this.started = new Date();
  }

  stop() {
    this.endered = new Date();
  }
}
