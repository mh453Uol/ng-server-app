import {AccountService} from './../services/account.service';
import {LoggingService} from './../../shared/services/logging.service';
import {Component, OnInit} from '@angular/core';
import {Account} from '../models/account';

@Component({
  selector: 'app-account-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  accounts: Account[];

  constructor(private loggingService: LoggingService, private accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.getAccounts();
  }

  onStatusChanged(event: {account: Account, status: number}) {
    this.loggingService.log(`account: ${event.account.name} status changed from ${event.account.status} to ${event.status}`);

    this.accountService.updateAccountStatus(event.account, event.status);
  }

  onEdit(account: Account) {
    this.loggingService.log('ViewComponents:onEdit', account);
    this.accountService.selectedAccount.emit(account);
  }
}
