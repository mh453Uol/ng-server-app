import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  accounts = [new Account('Majid', 1), new Account('Cameron', 0)];

  constructor() {}

  ngOnInit() {}

  onClickAddAccount(name: string, status: number) {
    console.log(name, status);
    this.accounts.splice(0, 0, new Account(name, +status));
  }
}
