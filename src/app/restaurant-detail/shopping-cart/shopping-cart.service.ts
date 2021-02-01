import { NotificationService } from './../../shared/services/notification.service';
import { Injectable } from '@angular/core';
import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './shopping-cart.model';

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = [];

  constructor(private notificationService: NotificationService){}

  addItem(item: MenuItem) {
    const foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

    if (foundItem) {
      this.increaseQtd(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
    console.log('adasdoaskd');
    this.notificationService.notify(`Você adicionou um item ${item.name}`);
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Você adicionou um item ${item.menuItem.name}`);
  }

  clear() {
    this.items = [];
  }

  increaseQtd(item: CartItem){
    item.quantity = item.quantity + 1;
  }

  decreaseQtd(item: CartItem){
    item.quantity = item.quantity - 1;

    if (item.quantity === 0){
      this.removeItem(item);
    }
  }

  total(): number {
    return this.items
      .map((item) => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
