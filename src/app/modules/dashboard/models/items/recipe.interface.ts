import { Item } from './item.interface';

export class Recipe {
  name: string;
  description: string;
  ingredients: Ingredient[];
  directions: {
    step: number;
    ingredients: Ingredient[];
    process: string;
  };
}

class Ingredient {
  item: Item;
  quantity: number;
}
