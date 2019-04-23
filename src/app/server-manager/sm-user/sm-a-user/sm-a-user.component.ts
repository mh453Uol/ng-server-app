import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm-a-user',
  templateUrl: './sm-a-user.component.html',
  styleUrls: ['./sm-a-user.component.css']
})
export class SmAUserComponent implements OnInit {

  private user;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        this.user = params['id'];
      }
    )
  }

  ngOnInit() {}
}
