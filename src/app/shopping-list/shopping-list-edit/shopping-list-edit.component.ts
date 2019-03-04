import {Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  // get access to template variables
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('amount') amountInput: ElementRef;

  @Output() addItem = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }

  onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    console.log(name.value, amount.value);
    this.addItem.emit(new Ingredient(name.value, amount.valueAsNumber));
    console.log(`ShoppingListEditComponent: onAddIngredient ${0}`, {name: name, amount: amount}, this.nameInput, this.amountInput);
  }
}
