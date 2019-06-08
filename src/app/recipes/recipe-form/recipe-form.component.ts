import { Router, ActivatedRoute, Data } from '@angular/router';
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

  isEditMode = false;
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.data.subscribe((d: Data) => {
      if (d['isEditMode'] != null) {
        this.isEditMode = d['isEditMode'];

        const id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.recipe = this.recipeService.getRecipeById(id);
      }
    });
  }

  ngOnInit() {}

  addNewRecipe() {
    if (!this.isEditMode) {
      const randomId = Math.floor(Math.random() * 256);
      this.recipe = new Recipe(
        randomId,
        this.name.nativeElement.value,
        this.description.nativeElement.value,
        [this.url.nativeElement.value],
        []
      );

      this.recipeService.addRecipe(this.recipe);
    } else {
      //.
    }

    this.router.navigate(['/recipes']);
  }
}
