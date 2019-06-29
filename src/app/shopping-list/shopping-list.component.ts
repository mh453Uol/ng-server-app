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
  ingredientEditing: {index: number, ingredient: Ingredient} = null;

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
    const index = this.shoppingListService.getShoppingList().indexOf(ingredient);
    this.ingredientEditing = {index: index, ingredient: ingredient};
  }

  onEditItem(item: {index: number, ingredient: Ingredient}) {
    console.log('Edited', item);
    this.shoppingListService.update(item.index, item.ingredient);
    this.isEditingIngredient = false;
  }
}
