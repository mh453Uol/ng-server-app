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
  @Input() ingredient: Ingredient;
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
    if (changes['editing'] && changes['editing'].currentValue) {
      this.editing = true;
      this.ingredient = changes['ingredient'].currentValue;
      this.shoppingListForm.patchValue(this.ingredient);
    }
  }

  onAddIngredient() {
    const ingredient: { id: number, name: string, amount: string} = this.shoppingListForm.value;

    if (this.editing) {
      ingredient.id = this.ingredient.id;
      this.editItem.emit(ingredient);
      this.editing = false;
    } else {
      this.addItem.emit(new Ingredient(ingredient.name, +ingredient.amount));
    }
    this.clearForm();
  }

  clearForm() {
    this.shoppingListForm.reset();
  }
}
