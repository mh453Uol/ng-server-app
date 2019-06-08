import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] // scoped to this component and the child components
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {
    //this.onSelectedRecipe();
  }

  // onSelectedRecipe() {
  //   this.recipeService.recipeSelected.subscribe(
  //     (r: Recipe) => {
  //       this.selectedRecipe = r;
  //       console.log(`RecipeComponent: onSelectedRecipe ${r}`);
  //     });
  // }

  addNewRecipe() {
    this.router.navigate(['/recipes', 'add']);
  }
}
