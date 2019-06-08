import { CanComponentDeactive } from './can-deactive-guard.service';
import { ServersService } from './../../servers-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, Query } from '@angular/core';
import { ServerV2 } from '../../models/serverV2.model';
@Component({
  selector: 'app-sm-edit-server',
  templateUrl: './sm-edit-server.component.html',
  styleUrls: ['./sm-edit-server.component.css']
})
export class SmEditServerComponent implements CanComponentDeactive {
  unsavedChanges = false;
  server: ServerV2 = new ServerV2();
  hash: string;
  constructor(
    private route: ActivatedRoute,
    private service: ServersService,
    private router: Router
  ) {
    let id: number;

    this.route.params.subscribe((params: Params) => {
      id = +params['id'];
      this.server = this.service.servers.find(s => s.id === id);
    });

    this.route.queryParams.subscribe((q: Query) => {
      this.hash = q['hash'];
    });
  }

  onEdit() {
    this.unsavedChanges = true;
    // queryParamsHandling: 'preserve' means it copies and replaces the query param for the next route navigate to
    this.router.navigate(['server-manager', 'users'], {
      queryParamsHandling: 'preserve'
    });
  }

  canDeactivate() {
    if (!this.unsavedChanges) {
      return true;
    }
    const shouldSave = confirm(
      'You have unsaved changes, want to save them before navigating away ?'
    );

    if (shouldSave) {
      // dont navigate away
      return false;
    }
    // navigate away since the user doesnt want to save changes
    return true;
  }
}
