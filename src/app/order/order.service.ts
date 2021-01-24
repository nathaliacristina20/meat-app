import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService) {}

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQtd(item: CartItem) {
    this.cartService.increaseQtd(item);
  }

  decreaseQtd(item: CartItem) {
    this.cartService.decreaseQtd(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }
}
