import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from './../services/recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((p: Params) => {
      this.id = +p['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
      console.log(this.id, this.recipe);
    });
  }

  ngOnInit() {}

  addToShoppingList() {
    this.recipeService.addRecipeToShoppingList(this.recipe);
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['/recipes']);
  }

}
