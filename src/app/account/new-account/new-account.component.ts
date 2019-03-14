import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from '../models/account';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClickAddAccount(name: string, status: number) {
    console.log(name, status);
    this.accountAdded.emit({name: name, status: status});
  }
}
