import { Component, OnInit } from '@angular/core';
import { TimerService } from '../shared/services/timer/timer.service';

@Component({
  selector: 'app-pomodorro-timer',
  templateUrl: './pomodorro-timer.component.html',
  styleUrls: ['./pomodorro-timer.component.css']
})
export class PomodorroTimerComponent implements OnInit {

  constructor(private timer: TimerService) { }

  ngOnInit() {
  }

}
