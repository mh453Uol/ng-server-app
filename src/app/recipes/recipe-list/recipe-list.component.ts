import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Omelet', 'Asain omelet with spices',
      ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png']),
    new Recipe('Chickpea Curry', 'y')
  ];

  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onSelected(index: number) {
    console.log(`RecipeListComponent: onSelected ${0}`, this.recipes[index]);
    this.selected.emit(this.recipes[index]);
  }

}
