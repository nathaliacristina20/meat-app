import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor() {}

  paymentOptions: RadioOption[] = [
    {
      label: 'Dinheiro',
      value: 'MON'
    },
    {
      label: 'Cartão de débito',
      value: 'DEB'
    },
    {
      label: 'Cartão Refeição',
      value: 'REF'
    },
  ]
  // emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  ngOnInit(): void {}
  finishOrder() {
    console.log('finalizar pedido');
  }
}
