import {AccountService} from './../services/account.service';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Account} from '../models/account';
import {NgModel} from '@angular/forms';

export enum Mode {
  CREATE = 0,
  EDIT = 1
}
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  _mode: Mode;
  mode: Mode;
  account: Account;

  constructor(private accountService: AccountService) {
    this.account = new Account('', 0);
  }

  ngOnInit() {
    this.mode = Mode.CREATE;

    this.accountService.selectedAccount.subscribe((a: Account) => {
      this.account = a;
      this.mode = Mode.EDIT;
    });
  }

  onClickAddAccount() {
    console.log('NewAccountComponent:onClickAddAccount', this.account);
    this.account.status = +this.account.status;

    if (this.mode === Mode.CREATE) {
      this.accountService.addAccount(this.account);
    } else {
      // mode is edit so update
      this.accountService.updateAccount(this.account.id, this.account);
    }

    this.account = new Account('', 0);
    this.mode = Mode.CREATE;
  }
}
