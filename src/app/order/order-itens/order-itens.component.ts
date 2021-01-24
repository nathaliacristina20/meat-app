import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/restaurant-detail/shopping-cart/shopping-cart.model';

@Component({
  selector: 'app-order-itens',
  templateUrl: './order-itens.component.html',
  styleUrls: ['./order-itens.component.css'],
})
export class OrderItensComponent implements OnInit {
  @Input() items!: CartItem[];

  @Output() increaseQtd = new EventEmitter<CartItem>();
  @Output() decreaseQtd = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() {}

  ngOnInit(): void {}

  emitIncreaseQtd(item: CartItem) {
    this.increaseQtd.emit(item);
  }

  emitDecreaseQtd(item: CartItem) {
    this.decreaseQtd.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }
}
