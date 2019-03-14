import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  @Output() statusChanged = new EventEmitter();
  @Input() account: Account;

  constructor() {}

  ngOnInit() {
  }

  onStatusChanged(status: number) {
    this.statusChanged.emit({account: this.account, status: status});
  }
}
