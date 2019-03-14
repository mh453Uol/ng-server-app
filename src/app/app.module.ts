import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {FormsModule} from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import {ShoppingListEditComponent} from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import { TreeComponent } from './tree/tree.component';
import { PanelComponent } from './panel/panel.component';
import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { PreserveFormattingDirective } from './directive/preserve-formatting.directive';
import { UnlessDirective } from './directive/unless.directive';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { Highlightv1Directive } from './directive/highlightv1.directive';
import { Highlightv2Directive } from './directive/highlightv2.directive';
// module bundle components, services into one place
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
    Highlightv1Directive,
    Highlightv2Directive
  ],
  // add modules to this modules (access functionality)
  imports: [
    BrowserModule,
    FormsModule
  ],
  // services I have created
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
