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
  timer = new Timer();

  isStarted = false;
  isPaused = false;
  pomodors = [
    new Pomodoro(0.5),
    new Break(1),
    new Pomodoro(),
    new Break(5),
    new Pomodoro(),
    new Break(5),
    new Pomodoro(),
    new Break(15)
  ];
  currentPomodoro: Pomodoro | Break;
  currentPomodoroIndex: number;

  constructor() { }

  ngOnInit() {
    this.currentPomodoroIndex = 0;
    this.currentPomodoro = this.pomodors[this.currentPomodoroIndex];
  }

  onStartTimer() {
    this.isStarted = true;

    this.timer.start(this.currentPomodoro.durationInMinute);
    this.currentPomodoro.start();

    this.timer.time.subscribe(
      (seconds: number) => {
      this.duration = seconds;
      },
      () => {},
      () => {
        // timer ended
        this.timer = new Timer();
        this.currentPomodoroIndex++;
        this.currentPomodoro = this.pomodors[this.currentPomodoroIndex++];
        this.onResetTimer();
        this.onStartTimer();
      }
    );


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
    this.isStarted = false;
    this.isPaused = false;
    this.duration = 0;
    this.timer.reset();
  }

  isResumeable() {
    return this.isStarted && this.isPaused;
  }

  isPauseable() {
    return this.isStarted && !this.isPaused;
  }

}
