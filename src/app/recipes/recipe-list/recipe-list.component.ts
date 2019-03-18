import { RecipeService } from './../services/recipe.service';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(index: number) {
    console.log(`RecipeListComponent: onSelected ${index}`, this.recipes[index]);
    this.recipeService.recipeSelected.emit(this.recipes[index]);
  }

}
