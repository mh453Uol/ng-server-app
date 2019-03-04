import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  constructor() {}

  ngOnInit() {
  }

  onAddItem(item: Ingredient) {
    console.log(`ShoppingListComponent: onAddItem ${0}`, item);
    this.ingredients.push(item);
  }
}
