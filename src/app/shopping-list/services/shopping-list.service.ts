import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  constructor() {}

  getShoppingList() {
    return this.ingredients;
  }

  addIngredient(item: Ingredient): any {
    const ingredientIndex = this.ingredients.findIndex(
      r => r.name === item.name
    );
    if (ingredientIndex === -1) {
      this.ingredients.push(item);
    } else {
      this.ingredients[ingredientIndex].amount += item.amount;
    }
  }

  removeIngredient(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter(i => {
      return i !== ingredient;
    });
  }

  update(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
  }
}
