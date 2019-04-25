import { PuzzleModule } from './puzzle/puzzle.module';
import { AccountService } from './account/services/account.service';
import { LoggingService } from './shared/services/logging.service';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { TreeComponent } from './tree/tree.component';
import { PanelComponent } from './panel/panel.component';
import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { PreserveFormattingDirective } from './directive/preserve-formatting.directive';
import { UnlessDirective } from './directive/unless.directive';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { NewAccountComponent } from './account/new-account/new-account.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { ViewComponent } from './account/view/view.component';
import { Highlightv1Directive } from './directive/highlightv1.directive';
import { Highlightv2Directive } from './directive/highlightv2.directive';
import { ServerManagerComponent } from './server-manager/server-manager.component';
import { SmUserComponent } from './server-manager/sm-user/sm-user.component';
import { SmServersComponent } from './server-manager/sm-servers/sm-servers.component';
import { SmServerComponent } from './server-manager/sm-servers/sm-server/sm-server.component';
import { SmEditServerComponent } from './server-manager/sm-servers/sm-edit-server/sm-edit-server.component';
import { SmAUserComponent } from './server-manager/sm-user/sm-a-user/sm-a-user.component';
import { BoardComponent } from './puzzle/board/board.component';
import { NotFoundComponent } from './errors-pages/not-found/not-found.component';

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
  // my components I have created
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ShoppingListComponent,
    RecipesComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent,
    TreeComponent,
    PanelComponent,
    BasicHighlightDirective,
    PreserveFormattingDirective,
    UnlessDirective,
    DropdownDirective,
    NewAccountComponent,
    AccountDetailComponent,
    AccountListComponent,
    ViewComponent,
    Highlightv1Directive,
    Highlightv2Directive,
    ServerManagerComponent,
    SmUserComponent,
    SmServersComponent,
    SmServerComponent,
    SmEditServerComponent,
    SmAUserComponent,
    NotFoundComponent
  ],
  // add modules to this modules (access functionality)
  imports: [
    BrowserModule,
    FormsModule,
    PuzzleModule,
    RouterModule.forRoot(serverManagerRoutes)
  ],
  // services I have created
  providers: [LoggingService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {}
