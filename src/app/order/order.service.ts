import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable()
export class OrderService {
  constructor(
    private cartService: ShoppingCartService,
    private http: HttpClient
  ) {}

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  itemsValue(): number {
    return this.cartService.total();
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

  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order) {
    return this.http.post<Order>(`http://localhost:3000/orders`, order);
  }
}
