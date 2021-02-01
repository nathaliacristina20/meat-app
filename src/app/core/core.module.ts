import { OrderService } from './../modules/order/order.service';
import { RestaurantsService } from './../restaurant/restaurant.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ShoppingCartService, RestaurantsService, OrderService],
})
export class CoreModule {}
