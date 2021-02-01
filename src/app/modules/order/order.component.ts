import { OrderService } from './../../shared/services/order.service';

import { CartItem } from '../../restaurant-detail/shopping-cart/shopping-cart.model';
import { RadioOption } from '../../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from './order.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EMAIL_PATTERN, NUMBER_PATTERN } from '../../shared/patterns';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  delivery = 8;

  emailPattern = EMAIL_PATTERN;
  numberPattern = NUMBER_PATTERN;

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
  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  static equalsTo(
    group: AbstractControl
  ): { [key: string]: boolean } | undefined {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if (!email || !emailConfirmation) {
      return undefined;
    }

    if (email.value !== emailConfirmation.value) {
      return {
        emailsNotMatch: true,
      };
    }

    return undefined;
  }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group(
      {
        name: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        email: this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(this.emailPattern),
        ]),
        emailConfirmation: this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(this.emailPattern),
        ]),
        address: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        addressNumber: this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(this.numberPattern),
        ]),
        optionalAddress: this.formBuilder.control(''),
        paymentOption: this.formBuilder.control('', [Validators.required]),
      },
      {
        validator: OrderComponent.equalsTo,
      }
    );
  }

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
      .subscribe((orderId: string) => {
        this.router.navigate(['order-summary']);
        this.orderService.clear();
      });
  }
}
