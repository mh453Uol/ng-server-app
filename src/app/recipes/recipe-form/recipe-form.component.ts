import { Router } from '@angular/router';
import { RecipeService } from './../services/recipe.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('url') url: ElementRef;

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {}

  addNewRecipe() {
    const randomId = Math.floor(Math.random() * 256);
    this.recipe = new Recipe(
      randomId,
      this.name.nativeElement.value,
      this.description.nativeElement.value,
      [this.url.nativeElement.value],
      []
    );

    this.recipeService.addRecipe(this.recipe);

    this.router.navigate(['/recipes']);
  }
}
