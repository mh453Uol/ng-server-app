import {Component, OnInit} from '@angular/core';
import {Account} from '../models/account';

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

}
