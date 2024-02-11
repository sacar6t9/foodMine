import { Injectable } from "@angular/core";
import { Cart } from "../../shared/models/cart";
import { food } from "../../shared/models/food";
import { CartItems } from "../../shared/models/CartItems";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: food): void {
    // Removed extra parentheses here
    let cartItem = this.cart.item.find((item) => item.food.id == food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.item.push(new CartItems(food)); // Corrected class name
  }
  removeFromCart(foodId: number): void {
    this.cart.item.filter((item) => item.food.id != foodId);
  }
  changeQuantity(foodId:number,quantity:number){
    let cartItem= this.cart.item.find(item=>item.food.id===foodId)
    if(!cartItem) return;
    cartItem.quantity=quantity;

  }
  getCart():Cart{
    return this.cart
  }
}
