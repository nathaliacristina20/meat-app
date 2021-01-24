import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './shopping-cart.model';
export class ShoppingCartService {
  items: CartItem[] = [];

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

    if (foundItem) {
      this.increaseQtd(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
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
