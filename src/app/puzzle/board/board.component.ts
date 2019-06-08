import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  constructor() {}

  timePeriodOne = ['1', '3', '5', '7', '9'];
  timePeriodTwo = ['0', '2', '4', '6', '8'];

}
