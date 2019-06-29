import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnChanges {
  shoppingListForm: FormGroup;
  @Input() editing = false;
  @Input() ingredient: {index: number, ingredient: Ingredient};
  @Output() editItem = new EventEmitter();

  @Output() addItem = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.shoppingListForm = fb.group({
      ['name']: new FormControl(null, [Validators.required]),
      ['amount']: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editing'].currentValue) {
      console.log(changes);
      this.editing = true;
      this.ingredient = changes['ingredient'].currentValue;
      this.shoppingListForm.patchValue(this.ingredient.ingredient);
    }
  }

  onAddIngredient() {
    const ingredient: {
      name: string;
      amount: string;
    } = this.shoppingListForm.value;
    console.log(ingredient);

    if (this.editing) {
      const item = {
        index: this.ingredient.index,
        ingredient: new Ingredient(ingredient.name, +ingredient.amount))
      };
      this.editItem.emit(item);
    } else {
      this.addItem.emit(new Ingredient(ingredient.name, +ingredient.amount));
    }
    this.clearForm();
  }

  clearForm() {
    this.shoppingListForm.reset();
  }
}
