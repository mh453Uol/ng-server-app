import { Ingredient } from "src/app/shared/models/ingredient.model";

export class Recipe {
    id: number;
    name: string;
    description: string;
    imagePaths: string[];
    ingredients: Ingredient[];

    constructor(id: number, name: string, desc: string, imagesPaths = [],
      ingredient: Ingredient[] = []) {
        this.name = name;
        this.description = desc;
        this.imagePaths = imagesPaths;
        this.ingredients = ingredient;
        this.id = id;
    }
}
