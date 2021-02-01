import { OrderService } from './modules/order/order.service';
import { RestaurantsService } from './restaurant/restaurant.service';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { RatingComponent } from './shared/rating/rating.component';
import { InputComponent } from './shared/input/input.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './shared/radio/radio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService, RestaurantsService, OrderService],
    };
  }
}
