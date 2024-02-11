import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItems } from '../shared/models/CartItems';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  cart!:Cart
constructor( private cartService:CartService,){
  
  this.setCart()
}

ngOnInit(): void {
  }
  setCart(){
    this.cart=this.cartService.getCart()
  }
  removeFromCart(cartItem:CartItems) {
    this.cartService.removeFromCart(cartItem.food.id)
    this.setCart()

}
changeQuantity(cartItem:CartItems,quantityInString:string){
  const quantity=parseInt(quantityInString)
  this.cartService.changeQuantity(cartItem.food.id,quantity);
  this.setCart()
}
}