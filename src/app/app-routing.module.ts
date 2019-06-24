import { RecipeFormComponent } from './recipes/recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { ServerManagerComponent } from './server-manager/server-manager.component';
import { SmUserComponent } from './server-manager/sm-user/sm-user.component';
import { SmAUserComponent } from './server-manager/sm-user/sm-a-user/sm-a-user.component';
import { SmServersComponent } from './server-manager/sm-servers/sm-servers.component';
import { SmEditServerComponent } from './server-manager/sm-servers/sm-edit-server/sm-edit-server.component';
import { BoardComponent } from './puzzle/board/board.component';
import { NotFoundComponent } from './errors-pages/not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from './server-manager/sm-servers/sm-edit-server/can-deactive-guard.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { GuideComponent } from './shared/guide/guide.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { MyFormsModule } from 'src/app/forms/forms.module';

// module bundle components, services into one place
const serverManagerRoutes: Routes = [
  // all top level routes here except children:[] get rendered in app.component router-outlet
  { path: '', component: ServerManagerComponent },
  ///////////// RECIPE BOOK ///////////////////////////
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: GuideComponent,
        data: { message: 'No Recipe Selected!' }
      },
      { path: 'add', component: RecipeFormComponent },
      {
        path: ':id/edit',
        component: RecipeFormComponent,
        data: { isEditMode: true }
      },
      { path: ':id', component: RecipeDetailComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },

  ///////////// SERVER MANAGER ///////////////////////////
  {
    path: 'server-manager/users',
    canActivateChild: [AuthGuard],
    component: SmUserComponent,
    children: [{ path: ':id', component: SmAUserComponent }]
  },
  // parent route
  {
    path: 'server-manager/servers',
    canActivateChild: [AuthGuard], // apply guard on all children routes
    component: SmServersComponent,
    // child route, these get rendered in SmServersComponent router-outlet
    children: [
      {
        path: ':id/edit',
        component: SmEditServerComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
  {
    path: 'cars',
    component: CarsComponent,
    children: [{ path: ':id', component: CarDetailComponent }]
  },
  { path: 'login', component: LoginComponent },
  { path: 'template-driven-form', component: TemplateDrivenComponent },
  // redirect to this url
  { path: 'error', redirectTo: '/some-random-url' },
  // wild card if route not found
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(serverManagerRoutes)],
  exports: [RouterModule, MyFormsModule]
})
export class AppRoutingModule {}
