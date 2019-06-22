import { interval, Subscription, Subject } from 'rxjs';

export class Timer {
  private ONE_SECOND = 1000; // 1000ms = 1 second
  private SECONDS_IN_A_MINUTE = 60;

  // States of timer
  private secondsElapsed = 0;
  private isPaused = false;
  private secondsPausedFor = 0;
  private started: Date;
  private stopped: Date;

  private timer: Subscription;
  public time = new Subject();

  start(duration: number) {
    this.started = new Date();

    this.timer = interval(this.ONE_SECOND).subscribe((second: number) => {
      if (this.shouldStopTimer(this.secondsElapsed, duration)) {
        this.stopTimer();
      } else {
        // if is paused keep track of how long
        if (this.isPaused) {
          this.secondsPausedFor++;
        } else {
          this.secondsElapsed = second - this.secondsPausedFor;
          this.time.next(this.secondsElapsed);
        }
      }
    });
  }
  stop() {
    this.stopped = new Date();
    this.stopTimer();
  }
  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }
  reset() {
    this.stopTimer();
    this.secondsElapsed = 0;
    this.secondsPausedFor = 0;
  }

  private shouldStopTimer(elapsedSeconds: number, durationAsMinutes: number) {
    return elapsedSeconds >= (durationAsMinutes * this.SECONDS_IN_A_MINUTE);
  }

  private stopTimer() {
    this.timer.unsubscribe();
    this.time.complete();
  }
}
