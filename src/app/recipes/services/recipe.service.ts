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
      1,
      'Omelet',
      'Asain omelet with spices',
      [
        'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
      ],
      [new Ingredient('Eggs', 3), new Ingredient('1/4 Brocali', 1)]
    ),
    new Recipe(
      2,
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

  getRecipeById(id: number) {
    return this.recipes.find(r => r.id === id);
  }

  addRecipeToShoppingList(recipe: Recipe) {
    for (const i of recipe.ingredients) {
      this.shoppingListService.addIngredient(i);
    }
  }
  addRecipe(recipe: Recipe): any {
    this.recipes.push(recipe);
  }

  editRecipe(id: number, recipe: Recipe) {
    const editingRecipe = this.recipes.find(r => r.id === id);

    editingRecipe.name = recipe.name;
    editingRecipe.description = recipe.description;
    editingRecipe.imagePaths = recipe.imagePaths;
  }

  deleteRecipe(id: number) {
    const index = this.recipes.findIndex(r => r.id === id);
    this.recipes.splice(index);
  }
}
