import { NgModule } from '@angular/core';
import { ServerManagerComponent } from './server-manager/server-manager.component';
import { SmUserComponent } from './server-manager/sm-user/sm-user.component';
import { SmAUserComponent } from './server-manager/sm-user/sm-a-user/sm-a-user.component';
import { SmServersComponent } from './server-manager/sm-servers/sm-servers.component';
import { SmEditServerComponent } from './server-manager/sm-servers/sm-edit-server/sm-edit-server.component';
import { BoardComponent } from './puzzle/board/board.component';
import { NotFoundComponent } from './errors-pages/not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';

// module bundle components, services into one place
const serverManagerRoutes: Routes = [
  // all top level routes here except children:[] get rendered in app.component router-outlet
  { path: '', component: ServerManagerComponent },
  {
    path: 'server-manager/users',
    component: SmUserComponent,
    children: [{ path: ':id', component: SmAUserComponent }]
  },
  // parent route
  {
    path: 'server-manager/servers',
    component: SmServersComponent,
    // child route, these get rendered in SmServersComponent router-outlet
    children: [
      { path: ':id/edit', component: SmEditServerComponent }
    ]
  },
  { path: 'puzzle', component: BoardComponent },
  // redirect to this url
  { path: 'error', redirectTo: '/some-random-url'},
  // wild card if route not found
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(serverManagerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {


}
