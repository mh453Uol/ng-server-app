import {PanelComponent} from './panel/panel.component';
import {
  Component,
  ContentChild,
  AfterContentInit,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'app';
  view = 'recipes';

  @ContentChild('panel') panel: ElementRef;

  ngAfterContentInit(): void {
    console.log(this.panel);
  }

  onClick() {
    console.log(this.panel);
  }

  onViewChanged(event: {page: string}) {
    this.view = event.page;
  }
}
