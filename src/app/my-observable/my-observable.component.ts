import { Observable, interval, Subscriber, Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-my-observable',
  templateUrl: './my-observable.component.html',
  styleUrls: ['./my-observable.component.css']
})
export class MyObservableComponent implements OnInit {
  @ViewChild('duration') duration: ElementRef;

  time: string;
  timer: Subscription;

  constructor() {}

  ngOnInit() {
    const duration = this.duration.nativeElement.value;
    this.timer = interval(1000).subscribe((num: number) => {
      this.time = num.toString();
    });
  }

  onSetDuration() {
    const duration = this.duration.nativeElement.value;
    this.timer.unsubscribe();
    this.timer = interval(duration).subscribe((num: number) => {
      this.time = num.toString();
    });
  }
}
