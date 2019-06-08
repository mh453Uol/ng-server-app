import { Component, OnInit } from '@angular/core';
import { Car } from './models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  constructor() {}

  ngOnInit() {
    this.cars = [
      new Car(1, 'Toyota Yaris'),
      new Car(2, 'BMW M3'),
      new Car(3, 'Land Rover Sport'),
      new Car(4, 'Nissan Skyliner')
    ];
  }
}
