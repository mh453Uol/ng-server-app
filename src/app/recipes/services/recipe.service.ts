import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Omelet', 'Asain omelet with spices',
      ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png']),
    new Recipe('Chickpea Curry', 'y')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
