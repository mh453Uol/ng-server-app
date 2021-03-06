import { CanComponentDeactive } from './can-deactive-guard.service';
import { Observable } from 'rxjs';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
export interface CanComponentDeactive {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactive> {
  canDeactivate(
    component: CanComponentDeactive,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean
  {
    return component.canDeactivate();
  }
}
