import { food } from "./food";
export class CartItems {
  constructor(food: food) {
    this.food = food;
    this.price
  }
  food: food;
  quantity: number = 1;

  get price(): number {
    return this.food.price * this.quantity;
  }
}
