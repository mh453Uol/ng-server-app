import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  accounts = [
    new Account('Majid', 1),
    new Account('Cameron', 0)
  ];

  constructor() { }

  ngOnInit() {
  }

}
