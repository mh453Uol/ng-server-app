import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() selected = new EventEmitter();
  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit() {
  }

  onSelected() {
    console.log(`RecipeItem: onSelected ${0}`, this.recipe);
    this.selected.emit(this.recipe);
  }

}
