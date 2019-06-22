import { UserService } from './my-observable/user.service';
import { AuthService } from './auth.service';
import { PanelComponent } from './panel/panel.component';
import {
  Component,
  ContentChild,
  AfterContentInit,
  ElementRef,
  OnInit
} from '@angular/core';
import { Timer } from './shared/services/timer/model/timer.model';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}
  title = 'app';
  view = 'recipes';

  @ContentChild('panel') panel: ElementRef;

  ngOnInit() {
  }
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
