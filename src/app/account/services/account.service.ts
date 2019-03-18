import {LoggingService} from './../../shared/services/logging.service';
import {Injectable, EventEmitter} from '@angular/core';
import {Account} from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts = [new Account('Majid', 1), new Account('Cameron', 0)];

  selectedAccount = new EventEmitter<Account>();

  constructor(private loggingService: LoggingService) {}

  getAccounts() {
    return this.accounts;
  }

  addAccount(account: Account) {
    this.accounts.splice(0, 0, account);
  }

  updateAccountStatus(account: Account, status: number): any {
    const found = this.accounts.find(a => a === account);

    this.loggingService.log('AccountService: updateAccountStatus');
    if (found) {
      found.status = status;
    }
  }

  updateAccount(id: number, account: Account): any {
    const found = this.accounts.find(a => a.id === id);

    this.loggingService.log('AccountService: updateAccountStatus');
    if (found) {
      found.name = account.name;
      found.status = account.status;
    }
  }

}
