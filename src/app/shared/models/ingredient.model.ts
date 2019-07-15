export class Ingredient {
    public readonly id = Math.round(Math.random() * 1000);
    constructor(public name: string, public amount: number) {}

}
