import {Ingredient} from 'src/app/shared/models/ingredient.model';
import {Injectable} from '@angular/core';

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
    this.ingredients.push(item);
  }
}
