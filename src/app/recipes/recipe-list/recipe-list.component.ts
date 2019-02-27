import {Component, OnInit} from '@angular/core';
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
    new Recipe('Chicken Curry', 'Pakistani Curry')
  ];

  constructor() {}

  ngOnInit() {
  }

}
