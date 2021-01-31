import { OrderService } from './order.service';
import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from './order.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  delivery = 8;

  paymentOptions: RadioOption[] = [
    {
      label: 'Dinheiro',
      value: 'MON',
    },
    {
      label: 'Cartão de débito',
      value: 'DEB',
    },
    {
      label: 'Cartão Refeição',
      value: 'REF',
    },
  ];
  constructor(private orderService: OrderService) {}

  // emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  ngOnInit(): void {}

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  increaseQtd(item: CartItem) {
    this.orderService.increaseQtd(item);
  }

  decreaseQtd(item: CartItem) {
    this.orderService.decreaseQtd(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  finishOrder(order: Order) {
    const cartItems = this.cartItems();

    order.orderItems = cartItems.map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );

    this.orderService
      .checkOrder(order)
      .pipe(map((resp: Order) => resp.id))
      .subscribe((orderId) => {
        console.log(`pedido finalizado ${orderId}`);
        this.orderService.clear();
      });
  }
}
