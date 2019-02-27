export class Recipe {
    name: string;
    description: string;
    imagePaths: string[];

    constructor(name: string, desc: string, imagesPaths = []) {
        this.name = name;
        this.description = desc;
        this.imagePaths = imagesPaths;
    }
}
