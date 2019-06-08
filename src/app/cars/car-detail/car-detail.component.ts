import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((p: Params) => {
      this.id = p['id'];
    });
  }

  ngOnInit() {}
}
