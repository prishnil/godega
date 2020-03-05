export class Nutrition {
  servingSize: number;
  calories: number;
  fat: {
    saturated: number;
    trans: number;
    total: number
  };
  cholesterol: number;
  sodium: number;
  carbohydrates: {
    fibre: number;
    sugar: number;
  };
  protein: number;
}
