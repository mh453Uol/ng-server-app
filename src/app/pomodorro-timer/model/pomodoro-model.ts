import { Task } from './task.interface';
export class Pomodoro implements Task {
  durationInMinute = 25;
  started: Date;
  endered: Date;

  constructor(duration?: number) {
    this.durationInMinute = duration;
  }

  start() {
    this.started = new Date();
  }

  stop() {
    this.endered = new Date();
  }
}
