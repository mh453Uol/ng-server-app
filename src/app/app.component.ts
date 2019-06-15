import { UserService } from './my-observable/user.service';
import { AuthService } from './auth.service';
import { PanelComponent } from './panel/panel.component';
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
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}
  title = 'app';
  view = 'recipes';

  @ContentChild('panel') panel: ElementRef;

  ngAfterContentInit(): void {
    console.log(this.panel);
  }

  onClick() {
    console.log(this.panel);
  }

  onViewChanged(event: { page: string }) {
    this.view = event.page;
  }
  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  activateUser() {
    this.userService.userActivated.next({ id: 1, name: 'Majid' });
  }
}
