import { Router, ActivatedRoute, Data } from '@angular/router';
import { RecipeService } from './../services/recipe.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  private form: FormGroup;

  isEditMode = false;
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required)
    });

    this.activatedRoute.data.subscribe((d: Data) => {
      if (d['isEditMode'] != null) {
        this.isEditMode = d['isEditMode'];

        const id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.recipe = this.recipeService.getRecipeById(id);

        this.form.patchValue({
          name: this.recipe.name,
          description: this.recipe.description,
          url: this.recipe.imagePaths
        });
      }
    });
  }

  ngOnInit() {}

  addNewRecipe() {
    if (!this.isEditMode) {
      const randomId = Math.floor(Math.random() * 256);
      const form: { name: string; description: string; url: string } = this.form
        .value;
      this.recipe = new Recipe(
        randomId,
        form.name,
        form.description,
        [form.url],
        []
      );

      this.recipeService.addRecipe(this.recipe);

      this.router.navigate(['/recipes']);
    }
  }

  editRecipe() {
    const form: { name: string; description: string; url: string } = this.form
      .value;

    this.recipe.name = form.name;
    this.recipe.description = form.description;
    this.recipe.imagePaths = [form.url];

    this.recipeService.editRecipe(this.recipe.id, this.recipe);
    this.router.navigate(['/recipes']);
  }
  log() {
    console.log(this.form);
  }
}
