import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  message: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((d: Data) => {
      this.message = d['message'];
    });
  }

  ngOnInit() {}
}
