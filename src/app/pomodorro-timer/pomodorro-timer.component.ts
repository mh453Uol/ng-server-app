import { Component, OnInit } from '@angular/core';
import { Timer } from '../shared/services/timer/model/timer.model';
import { Pomodoro } from './model/pomodoro-model';
import { Break } from './model/break.model';

@Component({
  selector: 'app-pomodorro-timer',
  templateUrl: './pomodorro-timer.component.html',
  styleUrls: ['./pomodorro-timer.component.css']
})
export class PomodorroTimerComponent implements OnInit {
  duration: number;
  isStarted = false;
  isPaused = false;
  pomodors = [
    new Pomodoro(0.1),
    new Break(0.2),
    new Pomodoro(0.3),
    new Break(0.4),
    new Pomodoro(0.5),
    new Break(0.6),
    new Pomodoro(0.7),
    new Break(0.8)
  ];
  currentPomodoro: Pomodoro | Break;
  currentPomodoroIndex: number;

  constructor() {}

  ngOnInit() {
    this.currentPomodoroIndex = 0;
    this.currentPomodoro = this.pomodors[0];
  }

  onStartTimer() {
    this.isStarted = true;

    this.currentPomodoro.start();

    this.currentPomodoro.timer.time.subscribe(
      (seconds: number) => {
        this.duration = seconds;
      },
      () => {},
      () => {
        // timer ended
        this.duration = 0;
        this.currentPomodoroIndex++;
        this.currentPomodoro = this.pomodors[this.currentPomodoroIndex++];
        this.onStartTimer();
      }
    );
  }

  onResumeTimer() {
    this.isPaused = false;
    this.currentPomodoro.timer.resume();
  }

  onPauseTimer() {
    this.isPaused = true;
    this.currentPomodoro.timer.pause();
  }

  onResetTimer() {
    this.isStarted = false;
    this.isPaused = false;
    this.duration = 0;
    this.currentPomodoro.timer.reset();
  }

  isResumeable() {
    return this.isStarted && this.isPaused;
  }

  isPauseable() {
    return this.isStarted && !this.isPaused;
  }
}
