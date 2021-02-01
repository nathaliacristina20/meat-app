import { OrderService } from './../shared/services/order.service';
import { RestaurantsService } from './../shared/services/restaurant.service';
import { ShoppingCartService } from './../shared/services/shopping-cart.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ShoppingCartService, RestaurantsService, OrderService],
})
export class CoreModule {}
