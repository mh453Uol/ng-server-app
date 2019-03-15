import { ShoppingListService } from './services/shopping-list.service';
import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();
  }

  onAddItem(item: Ingredient) {
    console.log(`ShoppingListComponent: onAddItem ${0}`, item);
    this.shoppingListService.addIngredient(item);
  }
}
