import { Ingredient } from "src/app/shared/models/ingredient.model";

export class Recipe {
    name: string;
    description: string;
    imagePaths: string[];
    ingredients: Ingredient[];

    constructor(name: string, desc: string, imagesPaths = [],
      ingredient: Ingredient[] = []) {
        this.name = name;
        this.description = desc;
        this.imagePaths = imagesPaths;
        this.ingredients = ingredient;
    }
}
