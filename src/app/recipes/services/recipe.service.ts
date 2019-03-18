import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Omelet',
      'Asain omelet with spices',
      [
        'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
      ],
      [new Ingredient('Eggs', 3), new Ingredient('1/4 Brocali', 1)]
    ),
    new Recipe(
      'Chickpea Curry',
      'Afgani Curry',
      [],
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Chickpea Tin', 1),
        new Ingredient('Onion', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes;
  }

  addRecipeToShoppingList(recipe: Recipe) {
    for (const i of recipe.ingredients) {
      this.shoppingListService.addIngredient(i);
    }
  }
}
