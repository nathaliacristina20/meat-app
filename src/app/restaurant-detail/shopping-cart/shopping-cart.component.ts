import { ShoppingCartService } from './../../shared/services/shopping-cart.service';
import { MenuItem } from './../menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { CartItem } from './shopping-cart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}

  items() {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  clear() {
    this.shoppingCartService.clear();
  }

  removeItem(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: MenuItem) {
    this.shoppingCartService.addItem(item);
  }
}
