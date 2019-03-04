import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapse = false;
  views = new Map<string, number>()
    .set('recipes', 1)
    .set('shopping-list', 2);

  currentView: number = this.views.get('recipes');

  @Output() viewChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onViewPage(key: string) {
    this.currentView = this.views.get(key);
    this.viewChanged.emit({page: key});
  }

}
