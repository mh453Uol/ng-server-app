import { ShoppingListService } from './services/shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  isEditingIngredient = false;
  ingredientEditing: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();
  }

  onAddItem(ingredient: Ingredient) {
    console.log(`ShoppingListComponent: onAddItem ${0}`, ingredient);
    this.shoppingListService.addIngredient(ingredient);
  }

  removeIngredient(ingredient: Ingredient) {
    this.shoppingListService.removeIngredient(ingredient);
    this.ingredients = this.shoppingListService.getShoppingList();
  }

  editIngredient(ingredient: Ingredient) {
    this.isEditingIngredient = true;
    this.ingredientEditing = ingredient;
  }

  onEditItem(ingredient: Ingredient) {
    console.log('Edited', ingredient);
    this.shoppingListService.update(ingredient);
    this.isEditingIngredient = false;
  }
}
