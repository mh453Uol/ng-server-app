import { interval, Subscription, Subject } from 'rxjs';

export class Timer {
  private ONE_SECOND = 1000; // 1000ms = 1 second
  private SECONDS_IN_A_MINUTE = 60;
  private durationInMinutes = 30; // 30 minutes
  private secondsElapsed = 0;

  private isPaused = false;
  private secondsPausedFor = 0;

  private timer: Subscription;

  public time = new Subject();
  start(duration: number) {
    this.durationInMinutes = duration;
    this.timer = interval(this.ONE_SECOND).subscribe((second: number) => {
      if (this.shouldStopTimer(second, duration)) {
        this.stopTimer();
      } else {
        // if is paused keep track of how long
        if (this.isPaused) {
          this.secondsPausedFor++;
        } else {
          this.secondsElapsed = second;
          this.time.next(this.secondsElapsed);
        }
      }
      //console.log(this.secondsElapsed - this.secondsPausedFor);
    });
  }
  stop() {
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
    this.start(this.durationInMinutes);
  }

  private shouldStopTimer(elapsedSeconds: number, durationAsMinutes: number) {
    return elapsedSeconds >= durationAsMinutes * this.SECONDS_IN_A_MINUTE;
  }

  private stopTimer() {
    this.timer.unsubscribe();
  }
}
