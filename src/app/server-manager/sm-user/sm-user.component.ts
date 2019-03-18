import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm-user',
  templateUrl: './sm-user.component.html',
  styleUrls: ['./sm-user.component.css']
})
export class SmUserComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit() {
    this.users = [
      new User('majid'),
      new User('adam')
    ]
  }

}
