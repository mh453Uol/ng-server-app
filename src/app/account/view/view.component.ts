import {Component, OnInit} from '@angular/core';
import {Account} from '../models/account';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-account-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  accounts = [new Account('Majid', 1), new Account('Cameron', 0)];

  constructor() {}
  ngOnInit() {
  }

  onAccountAdded(event: {name: string, status: string}) {
    this.accounts.splice(0, 0, new Account(event.name, +event.status));
  }

  onStatusChanged(event: {account: Account, status: number}) {
    const account = this.accounts.find(a => a === event.account);

    if (account) {
      account.status = event.status;
    }
  }
}
