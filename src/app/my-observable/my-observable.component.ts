import { Observable, interval, Subscriber, Subscription, Observer, Subject } from 'rxjs';
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
    //this.ownObservable();
    //this.customObservable();

    const duration = this.duration.nativeElement.value;
    this.timer = interval(1000).subscribe((num: number) => {
      this.time = num.toString();
      //console.log(`interval(1000) rxJS Second: ${num}`);
    });
  }

  onSetDuration() {
    const duration = this.duration.nativeElement.value;
    this.timer.unsubscribe();
    this.timer = interval(duration).subscribe((num: number) => {
      this.time = num.toString();
    });
  }

  ownObservable() {
    let count = 0;

    const observable = new Observable(observer => {
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    observable.subscribe((d: number) => {
      console.log(`Second: ${d}`);
    });
  }

  customObservable() {
    const observable = new Observable(observer => {
      // after 2 seconds execute
      setTimeout(() => {
        observer.next('First Package');
      }, 2000);

      // after 4 seconds execute
      setTimeout(() => {
        observer.next('Second Package');
        observer.complete();
      }, 4000);

      setTimeout(() => {
        observer.error('this doesnt work');
      }, 6000);
    });

    observable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

}
