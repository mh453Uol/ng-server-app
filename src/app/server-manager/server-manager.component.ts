import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-manager',
  templateUrl: './server-manager.component.html',
  styleUrls: ['./server-manager.component.css']
})
export class ServerManagerComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  onLoadServer() {
    const currentRoute = this.route;
    // navigate programmatically
    this.router.navigate(['server-manager', 'servers']);
    this.router.navigate(['server-manager', 'servers'], { relativeTo: currentRoute});

  }
}
