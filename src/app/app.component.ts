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
    // const timer = new Timer();
    // timer.time.subscribe((duration: number) => {
    //   console.log(duration);
    // });

    // timer.start(1);

    // setTimeout(function() {
    //   console.log('Pausing for 15 seconds');
    //   timer.pause(); // pause for 15 seconds
    // }, 1000 * 15);

    // setTimeout(function() {
    //   console.log('Resume');
    //   timer.resume(); // after 30 seconds continue
    // }, 1000 * 30);
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
