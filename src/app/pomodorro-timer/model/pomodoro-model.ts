import { Task } from './task.interface';
import { Timer } from '../../shared/services/timer/model/timer.model';
export class Pomodoro implements Task {
  durationInMinute = 25;
  timer: Timer;

  constructor(duration?: number) {
    this.durationInMinute = duration;
  }

  start() {
    this.timer = new Timer();
    this.timer.start(this.durationInMinute);
  }

  stop() {
    this.timer.stop();
  }

  get started() {
    return this.started;
  }

  get stopped() {
    return this.stopped;
  }
}
