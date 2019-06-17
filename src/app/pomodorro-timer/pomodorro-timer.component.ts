import { Component, OnInit } from '@angular/core';
import { TimerService } from '../shared/services/timer/timer.service';
import { Timer } from '../shared/services/timer/model/timer.model';

@Component({
  selector: 'app-pomodorro-timer',
  templateUrl: './pomodorro-timer.component.html',
  styleUrls: ['./pomodorro-timer.component.css']
})
export class PomodorroTimerComponent implements OnInit {
  duration: number;
  timer = new Timer();

  isStarted = false;
  isPaused = false;

  constructor() { }

  ngOnInit() {
  }

  onStartTimer() {
    this.isStarted = true;

    this.timer.time.subscribe((seconds: number) => {
      this.duration = seconds;
    });

    this.timer.start(2);
  }

  onResumeTimer() {
    this.isPaused = false;
    this.timer.resume();
  }

  onPauseTimer() {
    this.isPaused = true;
    this.timer.pause();
  }

  onResetTimer() {
    this.timer.reset();
  }

  isResumeable() {
    return this.isStarted && this.isPaused;
  }

  isPauseable() {
    return this.isStarted && !this.isPaused;
  }

}
