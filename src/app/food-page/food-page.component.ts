import { Component, Input } from '@angular/core';
import { food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { TagsComponent } from '../tags/tags.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart/cart.service';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [TagsComponent,CommonModule,NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
 
food!:food;
constructor(private router:Router,  private activatedRoute:ActivatedRoute ,foodService:FoodService,private cartService:CartService){
  activatedRoute.params.subscribe((parrams)=>{
    if(parrams['id'])
    this.food=foodService.getFootById(parrams['id'])
  })
}
addToCart(){
this.cartService.addToCart(this.food);
this.router.navigateByUrl('/cart-page')
}
}